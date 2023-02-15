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

const AddCampagne = ({ show, handleClose}) => {

    const [formData, setFormData] =useState({
        nom: "",
        dateDebut: "",
        etape: "",
        dateFin: ""
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
            nom: "",
            dateDebut: "",
            chiffreAttendue: "",
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
                  <MDBInput type='date' wrapperClass='mb-4' label='date fin' name='dateFin' 
                    required
                    value={formData.dateFin}
                    onChange={handleChange}
                  />
                  
                  <MDBBtn type='submit' className='mb-4' block>
                    Create
                  </MDBBtn>
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={handleClose}>
                Close
              </MDBBtn>
              <MDBBtn color='danger'>
                Clear
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
    </MDBModal>
  )
}

export default AddCampagne