import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import NavbarContact from '../../components/navbar/NavbarContact';
import SideBar from '../../components/sidebar/SideBar';
import LeadService from '../../services/LeadService';
import './viewLead.scss';
//import Update from "../../images/Update.png";
import Update from "../../images/Update.png";

const ViewLead = () => {

    const { id } = useParams();
    const [file, setFile] = useState("");
    const navigate = useNavigate();

    const [lead, setLead] = useState({
        id: id,
        nom: "",
        prenom: "",
        age: "",
        genre: "",
        profession: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setLead({ ...lead, [e.target.name]: value });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await LeadService.getLeadById(lead.id);
                setLead(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const updateLead = (e) => {
        e.preventDefault();
        console.log(lead);
        LeadService.updateLead(lead, id)
            .then((response) => {
                navigate("/campagnes");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='editLead'>
            <SideBar />
            <div className="editLeadContainer">
                <NavbarContact />

                <div className="bottom">
                    <div className="left">
                        <img src={Update} alt="" />
                    </div>
                    <div className="right">
                        <form action="">
                            <div className="formInput">
                                <label htmlFor="">
                                    Image:
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Nom:</label>
                                <input type="text" name="nom" value={lead.nom} onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Prenom:</label>
                                <input type="text" name="prenom" value={lead.prenom} onChange={(e) => handleChange(e)} ></input>
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Age:</label>
                                <input type="number" name="age" value={lead.age} onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="formInput">
                                <label>Genre:</label>
                                <input type="text" name="genre" value={lead.genre} onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="formInput">
                                <label>Profession:</label>
                                <input type="text" name="profession" value={lead.profession} onChange={(e) => handleChange(e)} />
                            </div>
                            <button className="btnUpdate" onClick={(e, id) => updateLead(e, lead.id)}>Update</button>
                            <button className="btnClear" onClick={() => navigate("/campagnes")}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewLead;