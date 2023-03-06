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
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import SendEmailService from '../../../services/SendEmailService';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const SendEmailModal = ({show, handleClose}) => {
  const [mail, setMail] = useState({
    destinataire: "",
    text: "",
    object: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setMail({ ...mail, [e.target.name]: value});
  }

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(mail);
    SendEmailService.sendEmail(mail)
      .then((response) => {
        console.log(response);
        toast.success("Email Send");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error Send Email");
      })
  }

  const reset = (e) => {
    e.preventDefault();
    setMail({
      destinataire: "",
      text: "",
      object: ""
    });
  };

  return (
    <MDBModal show={show} tabIndex='-1' staticBackdrop>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Send Email</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={handleClose}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <form>
              <MDBInput type='email' wrapperClass='mb-4' label='Destinataire' 
                name='destinataire' 
                value={mail.destinataire} 
                onChange={(e) => handleChange(e)}
              />
              <MDBInput type='text' wrapperClass='mb-4' label='Object' 
                name='object' 
                value={mail.object} 
                onChange={(e) => handleChange(e)}
              />

              <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here"
                  name="text"
                  value={mail.text} 
                  onChange={(e) => handleChange(e)}
                  ></textarea>
                  <label for="floatingTextarea">Message</label>
              </div>
              <br />

              <MDBInput type='file' wrapperClass='mb-4' />
              <MDBBtn type='submit' className='mb-4' onClick={sendEmail} block>
                Send Email
              </MDBBtn>
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

export default SendEmailModal