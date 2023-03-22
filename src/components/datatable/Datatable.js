import React from 'react'
import "./datatable.scss";
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

const Datatable = () => {

  return (
    <>
      <div className="listeUsers">
        <div className="listeUsersContainer">
            <div className="datatable">
              <div className="datatableTitle">
                <h3>Add New User <PersonAddAltOutlinedIcon /></h3>
                <Link to="/users/new" className="link">
                  Add New <PersonAddAltOutlinedIcon />
                </Link>
              </div>
              <Table striped>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Email</th>
                    <th>Profile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td className="cellAction">
                      <button className="viewButton">View</button>
                      <button className="deleteButton">Update</button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td className="cellAction">
                      <button className="viewButton">View</button>
                      <button className="deleteButton">Update</button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td className="cellAction">
                      <button className="viewButton">View</button>
                      <button className="deleteButton">Update</button>
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

export default Datatable