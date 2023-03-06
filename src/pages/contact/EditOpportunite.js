import React, { useState, useEffect } from 'react';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useNavigate, useParams } from 'react-router-dom';
import SideBar from '../../components/sidebar/SideBar';
import NavbarContact from '../../components/navbar/NavbarContact';
import './editOpportunite.scss';
import OpportuniteService from '../../services/OpportuniteService';

const EditOpportunite = () => {

    const { id } = useParams();
    const [file, setFile] = useState("");
    const navigate = useNavigate();
    const [opportunite, setOpportunite] = useState({
        id: id,
        matricule: "",
        mec: "",
        valVenal: "",
        valNeuf: "",
        debut: "",
        fin: "",
        dureContrat: "",
        prime: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setOpportunite({ ...opportunite, [e.target.name]: value});
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await OpportuniteService.getOpportuniteById(opportunite.id);
                setOpportunite(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const updateOpportunite = (e) => {
        e.preventDefault();
        OpportuniteService.updateOpportunite(opportunite, id)
            .then((response) => {
                navigate("/contacts/listeopportunity");
                console.log(opportunite);
            })
            .catch((error) => {
                console.log(error);
            });
    };

  return (
    <div className="editOpportunite">
        <SideBar/>
        <div className="editOpportuniteContainer">
            <NavbarContact/>
            <div className="top">
                <h1>Update Opportunite</h1>
            </div>
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
                                Image: <DriveFolderUploadOutlinedIcon className="icon"/>
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <div className="formInput">
                            <label htmlFor="">Matricule:</label>
                            <input type="text" name="matricule" value={opportunite.matricule} onChange={(e) => handleChange(e)} />
                        </div>
                        <div className="formInput">
                            <label htmlFor="">Mise en circulation:</label>
                            <input type="text" name="mec" value={opportunite.mec} onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="formInput">
                            <label htmlFor="">Valeur Venal:</label>
                            <input type="number" name="valVenal" value={opportunite.valVenal} onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="formInput">
                            <label htmlFor="">Valeur Neuf:</label>
                            <input type="text" name="valNeuf" value={opportunite.valNeuf} onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="formInput">
                            <label htmlFor="">Date Debut:</label>
                            <input type="date" name="Debut" value={opportunite.debut} onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className='formInput'>
                            <label htmlFor="">Date Fin:</label>
                            <input type="date" name='fin'  value={opportunite.fin} onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className='formInput'>
                            <label htmlFor="">Dure Contrat:</label>
                            <input type="text" name='dureContrat' value={opportunite.dureContrat} onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className='formInput'>
                            <label htmlFor="">Prime</label>
                            <input type="text" name='prime' value={opportunite.prime} onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className='formInput'></div>
                        <button className="btnUpdate" onClick={updateOpportunite}>Update</button>
                        <button className="btnClear" onClick={() => navigate("/contacts/listeopportunity")}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditOpportunite