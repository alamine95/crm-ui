import axios from "axios";

const CAMPAGNE_API_BASE_URI = "http://localhost:3001/api/v1/campagnes";

class CampagneService {
    saveCampagne(campagne){
        return axios.post(CAMPAGNE_API_BASE_URI, campagne);
    }

    getCampagnes(){
        return axios.get(CAMPAGNE_API_BASE_URI);
    }

    getCampagneById(id){
        return axios.get(CAMPAGNE_API_BASE_URI + "/" +id);
    }

    updateCampagne(campagne, id){
        return axios.post(CAMPAGNE_API_BASE_URI + "/" +id, campagne);
    }

    deleteCampagne(id){
        return axios.delete(CAMPAGNE_API_BASE_URI + "/" +id);
    }
}

export default new CampagneService();