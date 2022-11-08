import React from 'react'
import "./listeContact.scss";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useState } from 'react';
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

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime' },
    { id: 4, lastName: 'Stark', firstName: 'Arya' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys' },
    { id: 6, lastName: 'Melisandre', firstName: null },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey' },
];

const ListeContact = () => {
  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter((item)=> item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="" style={{ textDecoration: "none"}}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
                  Delete
            </div>
          </div>
        );
      }
    }
  ];

  const [basicModal, setBasicModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [rendezVousModal, setRendezVousModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  const emailToggleShow = () => setEmailModal(!emailModal);
  const rendezVousToggleShow = () => setRendezVousModal(!rendezVousModal);

  return (
    <>
      <div className="listeContact">
        <div className="listeContactContainer">
          <div className="top">
            <div className="modalbtn">
              <MDBBtn onClick={toggleShow}>Tache</MDBBtn>
            </div>
            <div className="modalbtn">
              <MDBBtn onClick={emailToggleShow}>Email</MDBBtn>
            </div>
            <div className="modalbtn">
              <MDBBtn onClick={rendezVousToggleShow}>Rendez-Vous</MDBBtn>
            </div>
          </div>
            <div className="datatable">
                <div className="datatableTitle">
                    Add New Contact
                    <Link to="/contacts/new" className="link">
                        Add New
                    </Link>
                </div>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns.concat(actionColumn)}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
      </div>
      {/* Modal for Create task */}
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Creer Tache</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form>
                  <MDBInput id='form4Example1' wrapperClass='mb-4' label='Lieu' />
                  <MDBInput type='date' id='form4Example2' wrapperClass='mb-4' label='Date' />
                  <MDBInput type='time' id='form4Example2' wrapperClass='mb-4' />
                  <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Task title' />
                  <MDBBtn type='submit' className='mb-4' block>
                    Create
                  </MDBBtn>
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      {/* Modal for Email */}
      <MDBModal show={emailModal} setShow={setEmailModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Send Email</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={emailToggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form>
                  <MDBInput type='email' id='form4Example1' wrapperClass='mb-4' label='Destinataire' />
                  <MDBInput type='text' id='form4Example2' wrapperClass='mb-4' label='Object' />
                  <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' />
                  <MDBInput type='file' id='form4Example2' wrapperClass='mb-4'/>
                  <MDBBtn type='submit' className='mb-4' block>
                    Send Email
                  </MDBBtn>
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={emailToggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      {/* Modal for Rendez-Vous */}
      <MDBModal show={rendezVousModal} setShow={setRendezVousModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Fixer Rendez-Vous</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={rendezVousToggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form>
                  <MDBInput type='text' id='form4Example1' wrapperClass='mb-4' label='Lieu'/>
                  <MDBInput type='date' id='form4Example2' wrapperClass='mb-4' label='date'/>
                  <MDBInput type='time' id='form4Example2' wrapperClass='mb-4'/>
                  <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' />
                  <MDBBtn type='submit' className='mb-4' block>
                    Send
                  </MDBBtn>
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={rendezVousToggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}

export default ListeContact