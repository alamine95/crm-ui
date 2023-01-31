import React from 'react';
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


const RendezVousModal = ({ show, handleClose}) => {
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
              <MDBInput type='text' id='form4Example1' wrapperClass='mb-4' label='Lieu' />
              <MDBInput type='date' id='form4Example2' wrapperClass='mb-4' label='date' />
              <MDBInput type='time' id='form4Example2' wrapperClass='mb-4' />
              <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' />
              <MDBBtn type='submit' className='mb-4' block>
                Send
              </MDBBtn>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={handleClose}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  )
}

export default RendezVousModal