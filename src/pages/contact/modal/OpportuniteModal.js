import React, { useEffect, useState } from "react";
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
import ContactService from "../../../services/ContactService";
import OpportuniteService from "../../../services/OpportuniteService";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const OpportuniteModal = ({ show, handleClose }) => {
    const [loading, setLoading] = useState(true);
    const [contacts, setContacts] = useState(null);

    const [formData, setFormData] = useState({
        date: "",
        etape: "",
        montant: "",
        nom: "",
        type: "",
        contactId: ""
    })

    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        }, console.log(formData));
    };

    const saveOpportunite = (e) => {
        e.preventDefault();
        OpportuniteService.saveOpportunite(formData)
            .then((response) => {
                console.log(response);
                toast.success('Opportunite ajouter close modal')
            })
            .catch((error) => {
                console.log(error);
                toast.error('Error Notification');
            });
    };

    const reset = (e) => {
        e.preventDefault();
        setFormData({
            date: "",
            etape: "",
            montant: "",
            nom: "",
            type: "",
            contactId: ""
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await ContactService.getContacts();
                setContacts(response.data);
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
                        <MDBModalTitle>Creer Opportunite</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={handleClose}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <form>
                            <MDBInput type='date' id='form4Example1' wrapperClass='mb-4' label='date' name="date"
                                value={formData.date}
                                onChange={handleChange}
                            />
                            <select className="form-select mb-4" aria-label="Default select example" name="etape"
                                value={formData.etape}
                                onChange={handleChange}
                            >
                                <option selected>Etape</option>
                                <option value="Initiale">Initiale</option>
                                <option value="Encour">Encour</option>
                                <option value="Terminer">Terminer</option>
                            </select>
                            <MDBInput type='number' wrapperClass='mb-4' label='Montant attendu' name="montant"
                                value={formData.montant}
                                onChange={handleChange} />
                            <MDBInput wrapperClass='mb-4' textarea rows={4} label='Nom' name="nom"
                                value={formData.nom}
                                onChange={handleChange}
                            />
                            <MDBInput wrapperClass='mb-4' textarea rows={4} label='type' name="type"
                                value={formData.type}
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
                            <MDBBtn type='submit' className='mb-4' block onClick={saveOpportunite}>
                                Create
                            </MDBBtn>
                        </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color='secondary' onClick={handleClose}>
                            Close
                        </MDBBtn>
                        <ToastContainer autoClose={2000}/>
                        <MDBBtn color='danger' onClick={reset}>
                            Clear
                        </MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    )
}

export default OpportuniteModal