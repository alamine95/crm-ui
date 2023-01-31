import React from 'react'
import "./listeContact.scss";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import TacheModal from './modal/TacheModal';
import SendEmailModal from './modal/SendEmailModal';
import RendezVousModal from './modal/RendezVousModal';

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
            <Link to="/contacts/editContact" style={{ textDecoration: "none"}}>
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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [emailModal, setEmailModal] = useState(false);
  //const [rendezVousModal, setRendezVousModal] = useState(false);

  // //const toggleShow = () => setBasicModal(!basicModal);
  // const emailToggleShow = () => setEmailModal(!emailModal);
  //const rendezVousToggleShow = () => setRendezVousModal(!rendezVousModal);

  return (
    <>
      <div className="listeContact">
        <div className="listeContactContainer">
          <div className="top">
            <div className="modalbtn">
              <MDBBtn onClick={handleShow}>Tache</MDBBtn>
              <TacheModal show={show} handleClose={handleClose}/>
            </div>
            <div className="modalbtn">
              <MDBBtn onClick={handleShow}>Email</MDBBtn>
              <SendEmailModal show={show} handleClose={handleClose}/>
            </div>
            <div className="modalbtn">
              <MDBBtn onClick={handleShow}>Rendez-Vous</MDBBtn>
              <RendezVousModal show={show} handleClose={handleClose}/>
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
    </>
  )
}

export default ListeContact