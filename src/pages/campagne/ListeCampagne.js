import React, { useState, useEffect } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import Table from 'react-bootstrap/Table';
import './listeCampagne.scss';
import AddCampagne from './modal/AddCampagne';
import CampagneService from '../../services/CampagneService';
import AddLeadModal from './modal/AddLeadModal';

const ListeCampagne = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showLead, setShowLead] = useState(false);
    const handleCloseLeadModal = () => setShowLead(false);
    const handleShowLeadModal = () => setShowLead(true);

    const [loading, setLoading] = useState(true);
    const [campagnes, setCampagnes] = useState(null);

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
        <>
            <div className="listeCampagne">
                <div className="listeCampagneContainer">
                    <div className="top">
                        <div className="madalbtn">
                            <MDBBtn onClick={handleShow}>New</MDBBtn>
                            <AddCampagne show={show} handleClose={handleClose}/>
                        </div>
                        <div className="madalbtn">
                            <MDBBtn onClick={handleShowLeadModal}>Lead</MDBBtn>
                            <AddLeadModal show={showLead} handleClose={handleCloseLeadModal}/>
                        </div>
                    </div>
                    <div className="datatable">
                        <div className="datatableTitle">
                            Liste des campagnes
                            {/* <Link to="/contacts/new" className="link">
                                Add New
                            </Link> */}
                            {/* <button className='button' onClick={handleShow}>Add New</button>
                            <AddCampagne show={show} handleClose={handleClose}/> */}
                        </div>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nom</th>
                                    <th>Date Debut</th>
                                    <th>Chiffre Attendue</th>
                                    <th>Type</th>
                                    <th>Etape</th>
                                    <th>Date Fin</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {!loading && (
                                <tbody>
                                    {campagnes.map((campagne) =>(
                                        <tr key={campagne.id}>
                                            <td>{campagne.id}</td>
                                            <td>{campagne.nom}</td>
                                            <td>{campagne.dateDebut}</td>
                                            <td>{campagne.chiffreAttendue}</td>
                                            <td>{campagne.type}</td>
                                            <td>{campagne.etape}</td>
                                            <td>{campagne.fin}</td>
                                            <td className="cellAction">
                                                <button className="viewButton">View</button>
                                                <button className="deleteButton">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            )}
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListeCampagne