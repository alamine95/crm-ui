import axios from "axios";

const SAVE_TACHES_API_BASE_URI = "http://localhost:3001/api/v1/taches";

class TacheService{
    saveTache(taches){
        return axios.post(SAVE_TACHES_API_BASE_URI, taches);
    }
}

export default new TacheService();