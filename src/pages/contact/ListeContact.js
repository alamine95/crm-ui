import React from 'react'
import "./listeContact.scss";
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import TacheModal from './modal/TacheModal';
import SendEmailModal from './modal/SendEmailModal';
import RendezVousModal from './modal/RendezVousModal';
import Table from 'react-bootstrap/Table';
import ContactService from '../../services/ContactService';
import NoteModal from './modal/NoteModal';
import OpportuniteModal from './modal/OpportuniteModal';
import { Pagination } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

const ListeContact = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showOpportunite, setShowOpportunite] = useState(false);
  const handleCloseOpportuniteModal = () => setShowOpportunite(false);
  const handleShowOpportuniteModal = () => setShowOpportunite(true);

  const [showEmail, setShowEmail] = useState(false);
  const handleCloseEmailModal = () => setShowEmail(false);
  const handleShowEmailModal = () => setShowEmail(true);

  const [showTache, setShowTache] = useState(false);
  const handleCloseTacheModal = () => setShowTache(false);
  const handleShowTacheModal = () => setShowTache(true);

  const [showNote, setShowNote] = useState(false);
  const handleCloseNoteModal = () => setShowNote(false);
  const handleShowNoteModal = () => setShowNote(true);

  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState(null);
  const navigate = useNavigate();

  const editContact = (e, id) => {
    e.preventDefault();
    navigate(`/contacts/editContact/${id}`);
  };

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

  const deleteContact = (e, id) => {
    e.preventDefault();
    ContactService.deleteContact(id).then((res) => {
      if(contacts){
        setContacts((prevElement) => {
          return prevElement.filter((contact) => contact.id !== id);
        });
      }
    });
  };

  return (
    <>
      <div className="listeContact">
        <div className="listeContactContainer">
          {/* <div className="top">
            <div className="modalbtn">
              <MDBBtn onClick={handleShowTacheModal}>Tache</MDBBtn>
              <TacheModal show={showTache} handleClose={handleCloseTacheModal} />
            </div>
            <div className="modalbtn">
              <MDBBtn onClick={handleShowEmailModal}>Email</MDBBtn>
              <SendEmailModal show={showEmail} handleClose={handleCloseEmailModal} />
            </div>
            <div className="modalbtn">
              <MDBBtn onClick={handleShow}>Rendez-Vous</MDBBtn>
              <RendezVousModal show={show} handleClose={handleClose} />
            </div>
            <div className="modalbtn">
              <MDBBtn onClick={handleShowOpportuniteModal}>Opportunite</MDBBtn>
              <OpportuniteModal show={showOpportunite} handleClose={handleCloseOpportuniteModal} />
            </div>
          </div> */}
          <div className="datatable">
            <div className="datatableTitle">
              <h4>Add New Contact &nbsp;<ContactsOutlinedIcon /></h4>
              <Link to="/contacts/new" className="link">
                Add New <PersonAddAltOutlinedIcon />
              </Link>
            </div>
            <Table striped>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Adresse</th>
                  <th>Telephone</th>
                  <th>Email</th>
                  <th>Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              {!loading && (
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact.id}>
                      <td>{contact.id}</td>
                      <td>{contact.nom}</td>
                      <td>{contact.prenom}</td>
                      <td>{contact.adresse}</td>
                      <td>{contact.telephone}</td>
                      <td>{contact.email}</td>
                      <td>{contact.type}</td>
                      <td className="cellAction">
                        <button className="viewButton" onClick={(e, id) => editContact(e, contact.id)}>View</button>
                        <button className="deleteButton" onClick={(e, id) => deleteContact(e, contact.id)}> <DeleteIcon className="icon"/></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </Table>
            <Pagination count={2} color="primary" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ListeContact