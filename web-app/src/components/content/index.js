import React from 'react';
import {observer, inject} from "mobx-react";
import Paragraph from "../paragraph"

@inject('patentDataStore', 'propertiesStore', 'favoriteStore')
@observer
export default class Content extends React.Component {
    constructor(props) {
        super(props)
        this.updateProperty = this.updateProperty.bind(this)
        this.onChange = this.onChange.bind(this)
        this.renderSection = this.renderSection.bind(this)
        this.cleanupParagraph = this.cleanupParagraph.bind(this)
    }

    updateProperty(key, value) {
        this.props.store[key] = value
    }

    onChange(event) {
        this.updateProperty(event.target.name, event.target.value)
    }


    cleanupParagraph(text) {
        if (text.endsWith("</p>")) {
            return text.substr(text.indexOf(">") + 1, text.length - 4);
        } else {
            return text;
        }
    }


    renderSection(name, data, render) {
        const searchText = this.props.patentDataStore.searchText;
        let elems = data;
        if (!data) {
            return <></>
        }
        if (!Array.isArray(data)) {
            data = [data];
        }

        elems = data.map((e) => this.cleanupParagraph(e));
        if (searchText && searchText !== '') {
            elems = elems.filter((e) => e.includes(searchText))
                .map((e) => e.replace(new RegExp(searchText), '<b style="filter: invert(100%)">' + searchText + '</b>'))
        }
        elems = elems.map((e, id) => <Paragraph text={e} key={name.toLowerCase() + id} id={name.toLowerCase() + id}/>);
        if (elems.length == 0) {
            elems = ["There is no matched paragraphs"]
        }

        return <> {
            render && data != null &&
            <section>
                <h3>{name}</h3>
                {elems}
            </section>
        }  </>
    }

    render() {
        const patentStore = this.props.patentDataStore;
        const propertiesStore = this.props.propertiesStore;
        const favoriteStore = this.props.favoriteStore;
        favoriteStore.cleanup(propertiesStore.title, propertiesStore.abstract, propertiesStore.description, propertiesStore.claims)

        const textStyle = {
            lineHeight: propertiesStore.lineSpace + "em",
            color: propertiesStore.fontColor,
            fontSize: propertiesStore.fontSize,
            fontFamily: propertiesStore.fontName

        }

        if (patentStore.patentFound) {
            return (
                <>
                    <form>
                        <input type="text" onChange={(e) => patentStore.searchText = e.target.value}/>
                    </form>
                    <article style={textStyle}>
                        {this.renderSection('Title', patentStore.title, propertiesStore.title)}
                        {this.renderSection('Abstract', patentStore.abstract, propertiesStore.abstract)}
                        {this.renderSection('Description', patentStore.description, propertiesStore.description)}
                        {this.renderSection('Claims', patentStore.claims, propertiesStore.claims)}

                    </article>
                </>
            );
        } else {
            return <div>Patent data not available</div>
        }
    }
}
