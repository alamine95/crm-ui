import React, {useState, useEffect} from 'react';
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
import TacheService from '../../../services/TacheService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TacheModal = ({ show, handleClose}) => {

  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState(null);

  const [formData, setFormData] = useState({
    object:"",
	  dateEcheance:"",
	  etape:"",
	  priorite:"",
    contactId: ""
  })

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    }, console.log(formData));
  };

  const saveTache = (e) => {
    e.preventDefault();
    TacheService.saveTache(formData)
      .then((response) => {
        console.log(response);
        toast.success('Tache ajouter close modal');
      })
      .catch((error) => {
        console.log(error);
        toast.error('Error Notification');
      })
  }

  const reset = (e) => {
    e.preventDefault();
    setFormData({
      object:"",
	    dateEcheance:"",
	    etape:"",
	    priorite:"",
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
                  <MDBInput id='form4Example1' wrapperClass='mb-4' label='object' name="object" 
                    value={formData.object} 
                    onChange={handleChange} 
                  />
                  <MDBInput type='date' wrapperClass='mb-4' label='date echeance' name="dateEcheance"
                    value={formData.dateEcheance}
                    onChange={handleChange} />
                  <select className="form-select mb-4" aria-label="Default select example" name="etape"
                    value={formData.etape}
                    onChange={handleChange}
                  >
                      <option selected>Etape</option>
                      <option value="Initiale">Initiale</option>
                      <option value="Encour">Encour</option>
                      <option value="Terminer">Terminer</option>
                  </select>
                  <MDBInput wrapperClass='mb-4' textarea rows={4} label='Prioriter' />
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
                  <MDBBtn type='submit' className='mb-4' onClick={saveTache} block>
                    Create
                  </MDBBtn>
                  <ToastContainer autoClose={2000}/>
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

export default TacheModal