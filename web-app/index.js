import React from 'react';
import ReactDOM from 'react-dom';
import App from "./src/components/app";
import * as serviceWorker from './src/serviceWorker';
import propertiesStore from './src/stores/propertiesStore';
import patentDataStore from './src/stores/patentDataStore';
import favoriteStore from './src/stores/favoriteStore';
import {Provider} from "mobx-react";
console.log("PatentDataStore.found",patentDataStore.patentFound)

const stores={
    propertiesStore,
    patentDataStore,
    favoriteStore
}

ReactDOM.render(<Provider  {...stores}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
