import axios from "axios";

const OPPORTUNITE_API_BASE_URI = "http://localhost:3001/api/v1/opportunites";

const OPPORTUNITE_CONTACT_API_BASE_URI = "http://localhost:3001/api/v1/opportunites/contact"

class OpportuniteService {
    saveOpportunite(opportunite){
        return axios.post(OPPORTUNITE_API_BASE_URI, opportunite);
    }

    getOpportunites(){
        return axios.get(OPPORTUNITE_API_BASE_URI);
    }

    getOpportuniteById(id){
        return axios.get(OPPORTUNITE_API_BASE_URI + "/" +id);
    }

    getOpportuniteByContactId(id){
        return axios.get(OPPORTUNITE_CONTACT_API_BASE_URI + "/" +id);
    }

    updateOpportunite(opportunite, id){
        return axios.post(OPPORTUNITE_API_BASE_URI + "/" +id, opportunite);
    }

    deleteOpportunite(id){
        return axios.delete(OPPORTUNITE_API_BASE_URI + "/" +id);
    }
}

export default new OpportuniteService();