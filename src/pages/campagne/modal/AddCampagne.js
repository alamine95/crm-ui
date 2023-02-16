import React, { useState } from 'react';
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
import { toast, ToastContainer } from 'react-toastify';
import CampagneService from '../../../services/CampagneService';

const AddCampagne = ({ show, handleClose}) => {

    const [formData, setFormData] =useState({
        nom: "",
        dateDebut: "",
        type: "",
        etape: "",
        dateFin: ""
    })

    const handleChange = event => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        }, console.log(formData));
    };

    const saveCampagne = (e) => {
      e.preventDefault();
      CampagneService.saveCampagne(formData)
        .then((response) => {
          console.log(response);
          toast.success('Campagne ajouter close modal');
        })
        .catch((error) => {
          console.log(error);
          toast.error('Error Notification');
        })
    }


    const reset = (e) => {
        e.preventDefault();
        setFormData({
            nom: "",
            dateDebut: "",
            chiffreAttendue: "",
            type: "",
            etape: "",
            dateFin: ""
        });
    };

  return (
    <MDBModal show={show} tabIndex='-1' staticBackdrop>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Creer Campagne</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={handleClose}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form>
                  <MDBInput type='text' id='form4Example1' wrapperClass='mb-4' label='nom' name="nom" 
                    required
                    value={formData.nom}
                    onChange={handleChange}
                  />
                  <MDBInput type='date' wrapperClass='mb-4' label='date debut' name="dateDebut" 
                    required
                    value={formData.dateDebut}
                    onChange={handleChange}
                  />
                  <MDBInput type='number' wrapperClass='mb-4' label='chiffr attendue' name="chiffreAttendue" 
                    required
                    value={formData.chiffreAttendue}
                    onChange={handleChange}
                  />
                  <select className="form-select mb-4" aria-label="Default select example" name="etape" 
                    required
                    value={formData.etape}
                    onChange={handleChange}
                  >
                      <option selected>Etape</option>
                      <option value="Initiale">Initiale</option>
                      <option value="Encour">Encour</option>
                      <option value="Terminer">Terminer</option>
                  </select>
                  <select className="form-select mb-4" aria-label="Default select example" name="type" 
                    required
                    value={formData.type}
                    onChange={handleChange}
                  >
                      <option selected>Type Campagne</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Commercial">Commerciale</option>
                  </select>
                  <MDBInput type='date' wrapperClass='mb-4' label='date fin' name='dateFin' 
                    required
                    value={formData.dateFin}
                    onChange={handleChange}
                  />
                  
                  <MDBBtn type='submit' className='mb-4' onClick={saveCampagne} block>
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

export default AddCampagne