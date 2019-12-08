import {observable, action} from 'mobx'

class PropertiesStore {

    @observable   fontName = 'Arial';
    @observable     fontSize = '14px';
    @observable    fontColor = 'BLACK';
    @observable     lineSpace = '1';
    @observable     title = true;
    @observable     abstract = false;
    @observable    description = true;
    @observable    claims = false;
}
const propertiesStore = new PropertiesStore()
export default propertiesStore;


