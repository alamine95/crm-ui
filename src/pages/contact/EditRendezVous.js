import React, { useState, useEffect } from 'react';
import NavbarContact from '../../components/navbar/NavbarContact';
import SideBar from '../../components/sidebar/SideBar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useNavigate, useParams } from 'react-router-dom';
import './editRendezVous.scss';
import RendezVousService from '../../services/RendezVousService';
import Update from "../../images/Update.png";

const EditRendezVous = () => {

    const [file, setFile] = useState("");
    const navigate = useNavigate();
    
    const {id} = useParams();
    const [rendezVous, setRendezVous] = useState({
        id: id,
        date: "",
        heure: "",
        object: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setRendezVous({ ...rendezVous, [e.target.name]: value});
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RendezVousService.getRendezVousById(id);
                setRendezVous(response.data);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const updateRendezVous = (e) => {
        e.preventDefault();
        console.log(rendezVous);
        RendezVousService.updateRendezVous(rendezVous, id)
            .then((response) => {
                navigate("/contacts/listerendezvous");
            })
            .catch((error) => {
                console.log(error);
            });
    };

  return (
    <div className="editRendezVous">
        <SideBar/>
        <div className="editRendezVousContainer">
            <NavbarContact/>
            <div className="top">
                <h1>Update Rendez-Vous</h1>
                <div className="modalBtn">

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
                            <input type="file" id="file" style={{ display: "none "}} />
                        </div> */}
                        <div className="formInput">
                            <label htmlFor="">Date:</label>
                            <input type="date" value={rendezVous.date} name="nom" onChange={(e) => handleChange(e)} />
                        </div>
                        <div className="formInput">
                            <label htmlFor="">Heur:</label>
                            <input type="time" value={rendezVous.heure} name="heure" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="formInput">
                            <label htmlFor="">Object:</label>
                            <input type="text" name="object" value={rendezVous.object}  onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="formInput"></div>
                        <button className="btnUpdate" onClick={updateRendezVous}>Update</button>
                        <button className="btnClear" onClick={() => navigate("/contacts/listerendezvous")}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditRendezVous