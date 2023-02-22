import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavbarContact from '../../components/navbar/NavbarContact'
import SideBar from '../../components/sidebar/SideBar';
import CampagneService from '../../services/CampagneService';
import './viewCampagne.scss';
import Table from 'react-bootstrap/Table';
import LeadService from '../../services/LeadService';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const ViewCampagne = () => {

    const { id } = useParams();
    const [file, setFile] = useState("");
    const navigate = useNavigate();

    const editLead = (e, id) => {
        e.preventDefault();
        navigate(`/campagnes/editLead/${id}`);
    };

    const [campagne, setCampagne] = useState({
        id: id,
        nom: "",
        dateDebut: "",
        chiffreAttendue: "",
        type: "",
        etape: "",
        dateFin: ""
    });

    const [loading, setLoading] = useState(true);
    const [leads, setLeads] = useState(null);

    const handleChange = (e) => {
        const value = e.target.value;
        setCampagne({ ...campagne, [e.target.name]: value });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await CampagneService.getCampagneById(campagne.id);
                setCampagne(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await LeadService.getLeadsByCampagneId(campagne.id)
                setLeads(res.data);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const updateCampagne = (e) => {
        e.preventDefault();
        console.log(campagne);
        CampagneService.updateCampagne(campagne, id)
            .then((response) => {
                navigate("/campagnes");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteLead = (e, id) => {
        e.preventDefault();
        LeadService.deleteLead(id).then((res) => {
            if(leads){
                setLeads((prevElement) => {
                    return prevElement.filter((lead) => lead.id !== id);
                });
            }
        });
    };

    return (
        <div className='editCampagne'>
            <SideBar />
            <div className="editCampagneContainer">
                <NavbarContact />
                {/* <div className="top">
                    <div className="modalbtn"></div>
                </div> */}
                <div className="bottom">
                    <div className="left">
                        <img src={
                            file
                                ? URL.createObjectURL(file)
                                : "https://icon-library.com/images/no-image-icon-0.jpg"
                        } alt="" />
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
                                <input type="text" name="nom" value={campagne.nom} onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Prenom:</label>
                                <input type="date" value={campagne.dateDebut} name="dateDebut" onChange={(e) => handleChange(e)}></input>
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Email:</label>
                                <input type="number" value={campagne.chiffreAttendue} name="chiffreAttendue" onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="formInput">
                                <label>Telephone:</label>
                                <input type="text" value={campagne.type} name="telephone" onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="formInput">
                                <label>Type de Campagne:</label>
                                <input type="text" value={campagne.type} name="type" onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="formInput">
                                <label>Etape</label>
                                <input type="text" value={campagne.etape} name="etape" onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="formInput">
                                <label>Date Fin</label>
                                <input type="date" value={campagne.dateFin} name="dateFin" onChange={(e) => handleChange(e)} />
                            </div>
                            <button className="btnUpdate" onClick={updateCampagne}>Update</button>
                            <button className="btnClear" >Cancel</button>
                        </form>
                    </div>
                </div>
                <div className="bottom">
                    <Table striped>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th>Age</th>
                                <th>Profession</th>
                                <th>Genre</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {!loading && (
                            <tbody>
                            {leads.map((lead) =>(
                                <tr key={lead.id}>
                                    <td>{lead.id}</td>
                                    <td>{lead.nom}</td>
                                    <td>{lead.prenom}</td>
                                    <td>{lead.age}</td>
                                    <td>{lead.profession}</td>
                                    <td>{lead.genre}</td>
                                    <td className='cellAction'>
                                        <button className="viewButton" onClick={(e, id) => editLead(e, lead.id)}> <RemoveRedEyeIcon/> </button>
                                        <button className="deleteButton" onClick={(e, id) => deleteLead(e, lead.id)}> <DeleteOutlineIcon/> </button>
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

export default ViewCampagne