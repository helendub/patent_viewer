import React from 'react';
import {observer, inject} from "mobx-react";

@inject('favoriteStore')
@observer
export default class RightPanel extends React.Component {

    constructor(props) {
        super(props);
        this.onFavoriteClick = this.onFavoriteClick.bind(this);
    }

    onFavoriteClick(e) {
        location.href = "#";
        location.href = "#"+e.target.id.replace("_favorite","");
    }

    render() {
        const favoriteParagraphs = this.props.favoriteStore.favoriteParagraphs;
        const favorite = Object.entries(favoriteParagraphs).map((entry) => <li onClick={this.onFavoriteClick} key={entry[0]+"_favorite"}
                                                                                id={entry[0]+"_favorite"}>{entry[1].substr(0, 55)+"..."}</li>)
        return (
            <>
                <div><h3>Favorite paragraphs</h3></div>
                <ul>
                {favorite}
                </ul>
            </>
        );
    }
}