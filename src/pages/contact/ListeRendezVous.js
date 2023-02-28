import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import NavbarContact from '../../components/navbar/NavbarContact';
import SideBar from '../../components/sidebar/SideBar';
import RendezVousService from '../../services/RendezVousService';
import './listeRendezVous.scss';
import { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const ListeRendezVous = () => {

    const [loading, setLoading] = useState(true);
    const [rendezVous, setRendezVous] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await RendezVousService.getRendezVous();
                setRendezVous(response.data);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);


    return (
        <div className="listeRendezVous">
            <SideBar />
            <div className="listeRendezVousContainer">
                <NavbarContact />
                <div className="top">
                    <div className="modalbtn"></div>
                </div>
                <div className="datatable">
                    <div className="datatableTitle">
                        Add New Contact
                        <Link to="/contacts/new" className="link">
                            Add New
                        </Link>
                    </div>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Heure</th>
                                <th>Object</th>
                            </tr>
                        </thead>
                        {!loading &&(
                            <tbody>
                                {rendezVous.map((rv) => (
                                    <tr key={rv.id}>
                                    <td>{rv.id}</td>
                                    <td>{rv.date}</td>
                                    <td>{rv.heure}</td>
                                    <td>Rencontrer les client pour plus d'info</td>
                                    <td className="cellAction">
                                        <button className="viewButton">View</button>
                                        <button className="deleteButton"><DeleteIcon className="icon"/></button>
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

export default ListeRendezVous