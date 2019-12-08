import {observable, action} from 'mobx'

class PatentDataStore {


    @observable    patentFound;
    @observable    patentNumber='';
    @observable    title ;
    @observable    description;
    @observable    claims;
    @observable    abstract;
    @observable    searchText;

}

const patentDataStore = new PatentDataStore()
export default patentDataStore;


