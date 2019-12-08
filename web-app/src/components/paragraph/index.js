import React from 'react';
import {observer, inject} from "mobx-react";

@inject('favoriteStore')
@observer
export default class Paragraph extends React.Component {
    constructor(props) {
        super(props)
        this.state = {favorite: false}
        this.setFavorite = this.setFavorite.bind(this);
    }

    setFavorite() {
        const favoriteStore = this.props.favoriteStore;
        if (this.state.favorite) {
          delete   favoriteStore.favoriteParagraphs[this.props.id];
        }else{
            favoriteStore.favoriteParagraphs[this.props.id]= this.props.text;
        }
        this.setState(
            {
                favorite: !this.state.favorite
            }
        )
    }

    render() {

        const style = this.state.favorite ? {borderStyle: "solid", borderWidth: "thin"} : {};
        return <div id={this.props.id}
            style={style}
            onClick={this.setFavorite}
            dangerouslySetInnerHTML={{__html: this.props.text}}/>
    }
}