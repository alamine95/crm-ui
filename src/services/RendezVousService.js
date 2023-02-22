import axios from "axios";

const RENDEZVOUS_API_BASE_URI = "http://localhost:3001/api/v1/rendezVous";

const RENDEZVOUS_CONTACT_API_BASE_URI = "http://localhost:3001/api/v1/rendezVous/contact";

class RendezVousService {
    saveRendezVous(rendezvous){
        return axios.post(RENDEZVOUS_API_BASE_URI, rendezvous);
    }

    getRendezVous(){
        return axios.get(RENDEZVOUS_API_BASE_URI);
    }

    getRendezVousById(id){
        return axios.get(RENDEZVOUS_API_BASE_URI + "/" +id);
    }

    getRendezVousByContactId(id){
        return axios.get(RENDEZVOUS_CONTACT_API_BASE_URI + "/" +id);
    }

    updateRendezVous(rendezvous, id){
        return axios.post(RENDEZVOUS_API_BASE_URI + "/" +id, rendezvous);
    }

    deleteRendezVous(id){
        return axios.delete(RENDEZVOUS_API_BASE_URI + "/" +id);
    }
}

export default new RendezVousService();