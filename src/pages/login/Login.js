import React from "react";
import { 
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox } from "mdb-react-ui-kit";

import logo from "../../images/logo.png";

const Login = () => {
    return (
    <MDBContainer className='my-5'>
      <MDBCard >

        <MDBRow className='g-0 d-flex align-items-center h-75 d-inline-block'>

          <MDBCol md='6' >
            <MDBCardImage src={logo} alt='phone' className='rounded-start w-100 h-100' fluid     />
          </MDBCol>

          <MDBCol md='6'>

            <MDBCardBody>

              <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn className="mb-4 w-100" style={{backgroundColor: '#274472'}}>Sign in</MDBBtn>

            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
    );
};

export default Login;