import {observable, action, computed} from 'mobx'

class FavoriteStore {
    @observable favoriteParagraphs = {};

    @action
    cleanup(title, abstract, description, claims) {
        Object.keys(this.favoriteParagraphs).filter(k =>
            (k.startsWith("title") && !title) ||
            (k.startsWith("abstract") && !abstract) ||
            (k.startsWith("description") && !description) ||
            (k.startsWith("claims") && !claims)
        ).forEach(e => delete this.favoriteParagraphs[e]);
    }

}

const favoriteStore = new FavoriteStore()
export default favoriteStore;


