import React from 'react';

import {InputLabel, Input} from '@material-ui/core';
import {observer, inject} from 'mobx-react'

@inject('propertiesStore', 'patentDataStore')
@observer
export default class Header extends React.Component {
    constructor(props) {
        super(props)


        this.handleChange = this.handleChange.bind(this);
        this.processPatentData = this.processPatentData.bind(this);

    }


    handleSubmit(event) {
        const patentDataStore = this.props.patentDataStore;
        event.preventDefault();
        fetch("/patents/" + patentDataStore.patentNumber + ".json")
            .then(res => res.json())
            .then(data => this.processPatentData(data))
            .catch(this.props.patentDataStore.patentFound = false);
    }

    handleChange(event) {
        event.preventDefault();
        const minLength = 9;
        const maxLength = 15;
        const patentDataStore = this.props.patentDataStore;
        patentDataStore.patentNumber = event.target.value;
        if (patentDataStore.patentNumber.length>minLength && patentDataStore.patentNumber.length<maxLength) {
            console.log('fetch');
        fetch("/patents/" + patentDataStore.patentNumber + ".json")
            .then(res => res.json())
            .then(data => this.processPatentData(data))
            .catch(this.props.patentDataStore.patentFound = false);
       }
    }

    processPatentData(inPatent) {
        const patentDataStore = this.props.patentDataStore;
        patentDataStore.patentFound = true;
        patentDataStore.patentNumber = inPatent.number;
        patentDataStore.title = inPatent.title;
        patentDataStore.description = inPatent.description;
        patentDataStore.claims = inPatent.claims;
        patentDataStore.abstract = inPatent.abstract;
    }

    render() {
        const patentDataStore = this.props.patentDataStore;

        const style = patentDataStore.patentFound===false ? {borderStyle: "solid", borderColor:"red", borderWidth: "thin"} : {};
        return (
            <>
                <h1>Patent Viewer</h1>
                <form onSubmit={this.handleSubmit}>
                    <InputLabel>Patent number:</InputLabel>
                    <Input style={style} type="text" name="patentNumber" value={patentDataStore.patentNumber}
                           onChange={this.handleChange}/>
                </form>
            </>
        );
    }


}

/*                     <Input style={style} type="text" name="patentNumber" value={patentDataStore.patentNumber}
                           onChange={(e) => patentDataStore.patentNumber = e.target.value}/>
*/