import React, { useState, useEffect } from 'react'
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBInput,
    MDBModalBody,
    MDBModalFooter
} from 'mdb-react-ui-kit';
import ContactService from '../../../services/ContactService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoteService from '../../../services/NoteService';

const NoteModal = ({ show, handleClose }) => {
    const [loading, setLoading] = useState(true);
    const [contacts, setContacts] = useState(null);

    const [formData, setFormData] = useState({
        remarque: "",
        contactId: ""
    });

    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        }, console.log(formData));
    };

    const saveNote = (e) => {
        e.preventDefault();
        NoteService.saveNote(formData)
            .then((response) => {
                console.log(response);
                toast.success('Note ajouter close modal');
            })
            .catch((error) => {
                console.log(error);
                toast.error('Error Notification');
            });
    };

    const reset = (e) => {
        e.preventDefault();
        setFormData({
            remarque: "",
            contactId: ""
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await ContactService.getContacts();
                setContacts(response.data);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <MDBModal show={show} tabIndex='-1' staticBackdrop>
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>Creer Tache</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={handleClose}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <form>
                            <MDBInput id='form4Example1' wrapperClass='mb-4' label='remarque' name="remarque"
                                value={formData.remarque}
                                onChange={handleChange}
                            />
                            {!loading && (
                                <select className="form-select mb-4" aria-label="Default select example" name="contactId"
                                    value={formData.contactId}
                                    onChange={handleChange}>
                                    <option selected>Select Contact</option>
                                    {contacts.map((contact) => (
                                        <option value={contact.id}>{contact.nom} {contact.prenom}</option>
                                    ))}
                                </select>
                            )}
                            <MDBBtn type='submit' className='mb-4' block onClick={saveNote}>
                                Create
                            </MDBBtn>
                            <ToastContainer autoClose={2000} />
                        </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color='secondary' onClick={handleClose}>
                            Close
                        </MDBBtn>
                        <MDBBtn color='danger' onClick={reset}>
                            Clear
                        </MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    )
}

export default NoteModal