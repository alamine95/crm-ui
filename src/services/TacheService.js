import axios from "axios";

const SAVE_TACHES_API_BASE_URI = "http://localhost:3001/api/v1/taches";

const TACHES_API_CONTACT_BASE_URI = "http://localhost:3001/api/v1/taches/contact"

class TacheService{
    saveTache(taches){
        return axios.post(SAVE_TACHES_API_BASE_URI, taches);
    }

    getTacheByContactId(id){
        return axios.get(TACHES_API_CONTACT_BASE_URI + "/" +id);
    }
}

export default new TacheService();