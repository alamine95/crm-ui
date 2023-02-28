import axios from "axios";

const NOTE_API_BASE_URI = "http://localhost:3001/api/v1/notes";
const NOTEBYCONTACT_API_BASE_URI = "http://localhost:3001/api/v1/notes/contact";

class NoteService{
    saveNote(note){
        return axios.post(NOTE_API_BASE_URI, note);
    }

    getNotes(){
        return axios.get(NOTE_API_BASE_URI);
    }

    getNoteById(id){
        return axios.get(NOTE_API_BASE_URI + "/" +id);
    }

    getNoteByContactId(id){
        return axios.get(NOTEBYCONTACT_API_BASE_URI + "/" +id);
    }

    updateNote(note, id){
        return axios.post(NOTE_API_BASE_URI + "/" +id);
    }

    deleteNote(id){
        return axios.delete(NOTE_API_BASE_URI + "/" +id);
    }
}

export default new NoteService();