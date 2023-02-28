import React, { useState, useEffect } from 'react';
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
import CampagneService from '../../../services/CampagneService';
import LeadService from '../../../services/LeadService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddLeadModal = ({ show, handleClose}) => {

  const [loading, setLoading] = useState(true);
  const [campagnes, setCampagnes] = useState(null);

  const [formData, setFormData] = useState({
    age: "",
    genre: "",
    nom: "",
    prenom: "",
    profession: "",
    campagneId: ""
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    }, console.log(formData));
  };

  const saveLead = (e) => {
    e.preventDefault();
    LeadService.saveLead(formData)
      .then((response) => {
        console.log(response);
        toast.success('Lead ajouter close modal');
      })
      .catch((error) => {
        console.log(error);
        toast.error('Error Notification');
      })
  }

  const reset = (e) => {
    e.preventDefault();
    setFormData({
      age: "",
      genre: "",
      nom: "",
      prenom: "",
      profession: "",
      campagneId: ""
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await CampagneService.getCampagnes();
        setCampagnes(response.data);
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
              <MDBModalTitle>Ajouter Lead</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={handleClose}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form>
                  <MDBInput type='number' id='form4Example1' wrapperClass='mb-4' label='age' name="age" 
                    required
                    value={formData.age}
                    onChange={handleChange}
                  />
                  <select className="form-select mb-4" aria-label="Default select example" name="genre" 
                    required
                    value={formData.genre}
                    onChange={handleChange}
                  >
                      <option selected>Genre</option>
                      <option value="Masculin">Masculin</option>
                      <option value="Feminin">Féminin</option>
                  </select>
                  <MDBInput type='text' wrapperClass='mb-4' label='nom' name="nom" 
                    required
                    value={formData.nom}
                    onChange={handleChange}
                  />
                  <MDBInput type='text' wrapperClass='mb-4' label='prenom' name='prenom' 
                    required
                    value={formData.prenom}
                    onChange={handleChange}
                  />
                  <MDBInput type='text' wrapperClass='mb-4' label='profession' name='profession' 
                    required
                    value={formData.profession}
                    onChange={handleChange}
                  />
                  {!loading && (
                    <select className="form-select mb-4" aria-label="Default select example" name="campagneId" 
                    required
                    value={formData.campagneId}
                    onChange={handleChange}
                    >
                      <option selected>Campagne</option>
                      {campagnes.map((campagne) =>(
                        <option value={campagne.id}>{campagne.nom}</option>
                      ))}
                    </select>
                  )}
                  <MDBBtn type='submit' className='mb-4' onClick={() => 
                    {saveLead(); handleClose();}} block>
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

export default AddLeadModal