import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import NavbarContact from '../../components/navbar/NavbarContact';
import SideBar from '../../components/sidebar/SideBar';
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';
import './listeOpportunite.scss';
import OpportuniteService from '../../services/OpportuniteService';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const ListeOpportunite = () => {

    const [loading, setLoading] = useState(true);
    const [opportunites, setOpportunites] = useState(null);
    const navigate = useNavigate();

    const editOpportunity = (e, id) => {
        e.preventDefault();
        navigate(`/contacts/editOpportunity/${id}`);
    };

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
                                <th>Matricule</th>
                                <th>MEC</th>
                                <th>Valeur Venal</th>
                                <th>Valeur Neuf</th>
                                <th>Prime</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {!loading &&(
                            <tbody>
                                {opportunites.map((opportunite) => (
                                    <tr key={opportunite.id}>
                                        <td>{opportunite.id}</td>
                                        <td>{opportunite.matricule}</td>
                                        <td>{opportunite.mec}</td>
                                        <td>{opportunite.valVenal}</td>
                                        <td>{opportunite.valNeuf}</td>
                                        <td>{opportunite.prime}</td>
                                        <td className="cellAction">
                                            <button className="viewButton" onClick={(e, id) => editOpportunity(e, opportunite.id)}> <VisibilityOutlinedIcon/></button>
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