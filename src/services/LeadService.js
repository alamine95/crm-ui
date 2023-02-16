import axios from "axios";

const LEAD_API_BASE_URI = "http://localhost:3001/api/v1/leads";

class LeadService {
    saveLead(lead){
        return axios.post(LEAD_API_BASE_URI, lead);
    }

    getLeads(){
        return axios.get(LEAD_API_BASE_URI);
    }

    getLeadById(id){
        return axios.get(LEAD_API_BASE_URI + "/" +id);
    }

    updateLead(lead, id){
        return axios.post(LEAD_API_BASE_URI + "/" +id, lead);
    }

    deleteLead(id){
        return axios.delete(LEAD_API_BASE_URI + "/" +id);
    }
}

export default new LeadService();