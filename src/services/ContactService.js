import axios from "axios";

const CONTACT_API_BASE_URI = "http://localhost:3001/api/v1/contacts";

class ContactService {
    saveContact(contact){
        return axios.post(CONTACT_API_BASE_URI, contact);
    }

    getContacts(){
        return axios.get(CONTACT_API_BASE_URI);
    }

    getContactById(id){
        return axios.get(CONTACT_API_BASE_URI + "/" +id);
    }

    updateContact(contact, id){
        return axios.put(CONTACT_API_BASE_URI + "/" +id, contact);
    }

    deleteContact(id){
        return axios.delete(CONTACT_API_BASE_URI + "/" +id);
    }
}

export default new ContactService();