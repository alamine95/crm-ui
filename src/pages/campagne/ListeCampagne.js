import React, { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import './listeCampagne.scss';
import AddCampagne from './modal/AddCampagne';

const ListeCampagne = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="listeCampagne">
                <div className="listeCampagneContainer">
                    <div className="top">
                        <div className="modalbtn">
                            <MDBBtn onClick={handleShow}>Tache</MDBBtn>
                            <AddCampagne show={show} handleClose={handleClose}/>
                        </div>
                    </div>
                    <div className="datatable">
                        <div className="datatableTitle">
                            Add New Contact
                            {/* <Link to="/contacts/new" className="link">
                                Add New
                            </Link> */}
                            <button className='button'>Add New</button>
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
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td className="cellAction">
                                        <button className="viewButton">View</button>
                                        <button className="deleteButton">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td className="cellAction">
                                        <button className="viewButton">View</button>
                                        <button className="deleteButton">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td className="cellAction">
                                        <button className="viewButton">View</button>
                                        <button className="deleteButton" >Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListeCampagne