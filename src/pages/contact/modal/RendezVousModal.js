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
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import ContactService from '../../../services/ContactService';
import RendezVousService from '../../../services/RendezVousService';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const RendezVousModal = ({ show, handleClose}) => {

  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState(null);

  const [formData, setFormData] = useState({
    date: "",
	  heure: "",
    contactId: ""
  })

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    }, console.log(formData));
  };

  const reset = (e) => {
    e.preventDefault();
    setFormData({
      date: "",
	    heure: "",
      contactId: ""
    })
  }

  const saveRendezVous = (e) => {
    e.preventDefault();
    RendezVousService.saveRendezVous(formData)
      .then((response) => {
        console.log(response);
        toast.success("Rendez vous fixer close modal");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error Notification !");
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
            <MDBModalTitle>Fixer Rendez-Vous</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={handleClose}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <form>
              <MDBInput type='date' id='form4Example2' wrapperClass='mb-4' label='date'
                name="date"
                value={formData.date}
                onChange={handleChange} />
              <MDBInput type='time' id='form4Example2' wrapperClass='mb-4' 
                name="heure"
                value={formData.heure}
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
              <MDBBtn type='submit' className='mb-4' onClick={saveRendezVous} block>
                Save Rendez Vous
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
            <ToastContainer autoClose={2000}/>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  )
}

export default RendezVousModal