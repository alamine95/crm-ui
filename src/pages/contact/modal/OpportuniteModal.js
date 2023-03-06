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
        maticule: "",
        mec: "",
        valVenal: "",
        valNeuf: "",
        debut: "",
        fin: "",
        dureContrat: "",
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
            maticule: "",
            mec: "",
            valVenal: "",
            valNeuf: "",
            debut: "",
            fin: "",
            dureContrat: "",
            prime: "",
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
                            <MDBInput type='text' id='form4Example1' wrapperClass='mb-4' label='matricule' name="matricule"
                                value={formData.maticule}
                                onChange={handleChange}
                            />
                            <MDBInput type='date' id='form4Example1' wrapperClass='mb-4' label='Mise en circulation' name="mec"
                                value={formData.mec}
                                onChange={handleChange}
                            />
                            <MDBInput type='number' id='form4Example1' wrapperClass='mb-4' label='Valeur Venale' name="valVenal"
                                value={formData.valVenal}
                                onChange={handleChange}
                            />
                            <MDBInput type='number' id='form4Example1' wrapperClass='mb-4' label='Valeur Neuf' name="valNeuf"
                                value={formData.valNeuf}
                                onChange={handleChange}
                            />
                            <MDBInput type='date' id='form4Example1' wrapperClass='mb-4' label='Date Debut' name="debut"
                                value={formData.debut}
                                onChange={handleChange}
                            />
                            {/* <select className="form-select mb-4" aria-label="Default select example" name="etape"
                                value={formData.etape}
                                onChange={handleChange}
                            >
                                <option selected>Etape</option>
                                <option value="Initiale">Initiale</option>
                                <option value="Encour">Encour</option>
                                <option value="Terminer">Terminer</option>
                            </select> */}
                            <MDBInput type='date' wrapperClass='mb-4' label='Date Fin' name="fin"
                                value={formData.fin}
                                onChange={handleChange} />
                            <MDBInput type='text' wrapperClass='mb-4' textarea rows={4} label='Dure Contrat' name="dureContrat"
                                value={formData.dureContrat}
                                onChange={handleChange}
                            />
                            <MDBInput type='number' wrapperClass='mb-4' textarea rows={4} label='Prime' name="prime"
                                value={formData.prime}
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