import React from 'react'
import NavbarContact from '../../components/navbar/NavbarContact';
import SideBar from '../../components/sidebar/SideBar';
import './editContact.scss';
import { useState, useEffect } from 'react';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { useNavigate, useParams } from 'react-router-dom';
import ContactService from '../../services/ContactService';
import { toast, ToastContainer } from 'react-toastify';
import { MDBBtn } from 'mdb-react-ui-kit';
import RendezVousModal from './modal/RendezVousModal';
import SendEmailModal from './modal/SendEmailModal';
import TacheModal from './modal/TacheModal';
import OpportuniteModal from './modal/OpportuniteModal';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import OpportuniteService from '../../services/OpportuniteService';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import TacheService from '../../services/TacheService';
import RendezVousService from '../../services/RendezVousService';
import NoteService from '../../services/NoteService';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import Update from "../../images/Update.png";

const EditContact = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showEmail, setShowEmail] = useState(false);
    const handleCloseEmailModal = () => setShowEmail(false);
    const handleShowEmailModal = () => setShowEmail(true);

    const [showTache, setShowTache] = useState(false);
    const handleCloseTacheModal = () => setShowTache(false);
    const handleShowTacheModal = () => setShowTache(true);

    const [showOpportunite, setShowOpportunite] = useState(false);
    const handleCloseOpportunite = () => setShowOpportunite(false);
    const handleShowOpportunite = () => setShowOpportunite(true);

    const { id } = useParams();
    const [file, setFile] = useState("");
    const navigate = useNavigate();
    const [contact, setContact] = useState({
        id: id,
        nom: "",
        prenom: "",
        genre: "",
        adresse: "",
        telephone: "",
        email: "",
        type: ""
    });

    const [loading, setLoading] = useState(true);
    const [opportunites, setOpportunites] = useState(null);
    const [taches, setTaches] = useState(null);
    const [rendezVous, setRendezVous] = useState(null);
    const [notes, setNotes] = useState(null);

    const handleChange = (e) => {
        const value = e.target.value;
        setContact({ ...contact, [e.target.name]: value });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await OpportuniteService.getOpportuniteByContactId(contact.id);
                setOpportunites(response.data);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await TacheService.getTacheByContactId(contact.id);
                setTaches(response.data);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RendezVousService.getRendezVousByContactId(contact.id);
                setRendezVous(response.data);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ContactService.getContactById(contact.id);
                setContact(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await NoteService.getNoteByContactId(contact.id);
                setNotes(response.data);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const updateContact = (e) => {
        e.preventDefault();
        console.log(contact);
        ContactService.updateContact(contact, id)
            .then((response) => {
                navigate("/contacts");
                toast.success('Contact Mise à jour');
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <div className='editContact'>
            <SideBar />
            <div className="editContactContainer">
                <NavbarContact />
                <div className="top">
                    <div className="modalbtn">
                        <MDBBtn onClick={handleShow}>Rendez-vous</MDBBtn>
                        <RendezVousModal show={show} handleClose={handleClose} />
                    </div>
                    <div className="modalbtn">
                        <MDBBtn onClick={handleShowEmailModal}>Email</MDBBtn>
                        <SendEmailModal show={showEmail} handleClose={handleCloseEmailModal} />
                    </div>
                    <div className="modalbtn">
                        <MDBBtn onClick={handleShowTacheModal}>Tache</MDBBtn>
                        <TacheModal show={showTache} handleClose={handleCloseTacheModal} />
                    </div>
                    <div className="modalbtn">
                        <MDBBtn onClick={handleShowOpportunite}>Opportunite</MDBBtn>
                        <OpportuniteModal show={showOpportunite} handleClose={handleCloseOpportunite} />
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={Update} alt="" />
                    </div>
                    <div className="right">
                        <form action="">
                            {/* <div className="formInput">
                                <label htmlFor="">
                                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div> */}
                            <div className="formInput">
                                <label htmlFor="">Nom:</label>
                                <input type="text" name="nom" value={contact.nom} onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Prenom:</label>
                                <input type="text" value={contact.prenom} name="prenom" onChange={(e) => handleChange(e)}></input>
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Email:</label>
                                <input type="text" value={contact.email} name="email" onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="formInput">
                                <label>Telephone:</label>
                                <input type="text" value={contact.telephone} name="telephone" onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="formInput">
                                <label>Type de Contact:</label>
                                 <select className="form-select mb-4" aria-label="Default select example"
                                    name="type"
                                    value={contact.type}
                                    onChange={(e) => handleChange(e)}>
                                        <option selected>{contact.type}</option>
                                        <option value="Prospect">Prospect</option>
                                        <option value="Contact">Contact</option>
                                        <option value="Client">Client</option>
                                 </select>
                            </div>
                            <div className="formInput">
                                <label>Genre:</label>
                                    <select className="form-select mbb-4" aria-label="Default select example"
                                        name="genre"
                                        value={contact.genre}
                                        onChange={(e) => handleChange(e)}>
                                            <option selected>{contact.genre}</option>
                                            <option value="Masculin">Masculin</option>
                                            <option value="Feminin">Feminin</option>
                                    </select>
                            </div>
                            <div className="formInput">
                                <label>Addresse</label>
                                <input type="text" value={contact.adresse} name="adresse" onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="formInput"></div>
                            <button className="btnUpdate" onClick={updateContact}>Update</button>
                            <ToastContainer autoClose={2000} />
                            <button className="btnClear" onClick={() => navigate("/contacts")}>Cancel</button>
                        </form>
                    </div>
                </div>

                <div className="opportuniteCard">
                    {!loading && (
                        <Card style={{ width: '16rem' }}>
                        <Card.Header> <h3>Opportunite <HourglassTopIcon/> </h3> </Card.Header>
                        {opportunites.map((opportunite) =>(
                            <ListGroup variant="flush">
                                <ListGroup.Item><strong>Matricule:</strong> {opportunite.matricule}</ListGroup.Item>
                                <ListGroup.Item><strong>MEC:</strong> {opportunite.mec}</ListGroup.Item>
                                <ListGroup.Item><strong>Valeur Venal:</strong> {opportunite.valVenal}</ListGroup.Item>
                                <ListGroup.Item><strong>Valeur Neuf:</strong> {opportunite.valNeuf}</ListGroup.Item>
                                <ListGroup.Item><strong>Date Debut:</strong> {opportunite.debut}</ListGroup.Item>
                                <ListGroup.Item><strong>Date Fin:</strong> {opportunite.fin}</ListGroup.Item>
                                <ListGroup.Item><strong>Prime:</strong> {opportunite.prime}</ListGroup.Item>
                            </ListGroup>
                        ))}
                        </Card>
                    )}

                    {!loading && (
                        <Card style={{ width: '16rem' }}>
                        <Card.Header> <h3>Tache <AssignmentOutlinedIcon/></h3> </Card.Header>
                        {taches.map((tache) => (
                            <ListGroup variant="flush">
                                <ListGroup.Item><strong>Object:</strong> {tache.object}</ListGroup.Item>
                                <ListGroup.Item><strong>Date Echeance:</strong> {tache.dateEcheance}</ListGroup.Item>
                                <ListGroup.Item><strong>Etape:</strong> {tache.etape}</ListGroup.Item>
                                <ListGroup.Item><strong>Priorite:</strong> {tache.priorite}</ListGroup.Item>
                            </ListGroup>
                        ))}
                        </Card>
                    )}

                    {!loading && (
                        <Card style={{ width: '16rem' }}>
                        <Card.Header><h3>Rendez-Vous <AccessAlarmOutlinedIcon /></h3></Card.Header>
                        {rendezVous.map((rv) => (
                            <ListGroup variant="flush">
                                <ListGroup.Item><strong>Date:</strong> {rv.date}</ListGroup.Item>
                                <ListGroup.Item><strong>Heure:</strong> {rv.heure}</ListGroup.Item>
                                <ListGroup.Item><strong>Object:</strong> {rv.object}</ListGroup.Item>
                        </ListGroup>
                        ))}
                        </Card>
                    )}

                    {!loading && (
                        <Card style={{ width: '16rem' }}>
                            <Card.Header> <h3>Remarque <CreateOutlinedIcon/></h3></Card.Header>
                            {notes.map((note) => (
                                <ListGroup variant="flush">
                                <ListGroup.Item><strong>Remarque:</strong> {note.remarque}</ListGroup.Item>
                                </ListGroup>
                            ))}
                        </Card>
                    )}
                </div>

            </div>

        </div>
    )
}

export default EditContact