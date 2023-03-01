import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import NavbarContact from '../../components/navbar/NavbarContact';
import SideBar from '../../components/sidebar/SideBar';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import './listeOpportunite.scss';
import OpportuniteService from '../../services/OpportuniteService';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const ListeOpportunite = () => {

    const [loading, setLoading] = useState(true);
    const [opportunites, setOpportunites] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await OpportuniteService.getOpportunites();
                setOpportunites(response.data);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div className="listeOpportunite">
            <SideBar />
            <div className="listeOpportuniteContainer">
                <NavbarContact />
                <div className="top">
                    <h3>Liste des Opportunite</h3>
                    <div className="modalbtn"></div>
                </div>
                <div className="datatable">
                    <div className="datatableTitle">
                        Liste des Opportunite
                        <Link to="/contacts/new" className="link">
                            Add New
                        </Link>
                    </div>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nom</th>
                                <th>Type</th>
                                <th>Etape</th>
                                <th>Montant</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {!loading &&(
                            <tbody>
                                {opportunites.map((opportunite) => (
                                    <tr key={opportunite.id}>
                                        <td>{opportunite.id}</td>
                                        <td>{opportunite.nom}</td>
                                        <td>{opportunite.type}</td>
                                        <td>{opportunite.etape}</td>
                                        <td>{opportunite.montant}</td>
                                        <td>{opportunite.date}</td>
                                        <td className="cellAction">
                                            <button className="viewButton"> <VisibilityOutlinedIcon/></button>
                                            <button className="deleteButton"> <DeleteIcon/></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        )}
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default ListeOpportunite