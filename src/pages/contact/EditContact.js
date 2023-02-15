import React from 'react'
import NavbarContact from '../../components/navbar/NavbarContact';
import SideBar from '../../components/sidebar/SideBar';
import './editContact.scss';
import { useState, useEffect } from 'react';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useNavigate, useParams } from 'react-router-dom';
import ContactService from '../../services/ContactService';
import { toast, ToastContainer } from 'react-toastify';

const EditContact = () => {
    const {id} = useParams();
    const [file, setFile] = useState("");
    const navigate = useNavigate();
    const [contact, setContact] = useState({
        id: id,
        nom: "",
        prenom: "",
        genre: "",
        adresse: "",
        telephone: "",
        email: "",
        type: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setContact({ ...contact, [e.target.name]: value});
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ContactService.getContactById(contact.id);
                setContact(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const updateContact = (e) => {
        e.preventDefault();
        console.log(contact);
        ContactService.updateContact(contact, id)
            .then((response) => {
                navigate("/contacts");
                toast.success('Contact Mise à jour');
            })
            .catch((error) => {
                console.log(error);
            });
    };


  return (
    <div className='editContact'>
        <SideBar/>
        <div className="editContactContainer">
            <NavbarContact/>
            <div className="top">
                <h1>Edit Single Contact</h1>
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
                            <input type="file" id="file" style={{display: "none"}} />
                        </div>
                        <div className="formInput">
                            <label htmlFor="">Nom:</label>
                            <input type="text" name="nom" value={contact.nom} onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="formInput">
                            <label htmlFor="">Prenom:</label>
                            <input type="text" value={contact.prenom} name="prenom" onChange={(e) => handleChange(e)}></input>
                        </div>
                        <div className="formInput">
                            <label htmlFor="">Email:</label>
                            <input type="text" value={contact.email} name="email" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="formInput">
                            <label>Telephone:</label>
                            <input type="text" value={contact.telephone} name="telephone" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="formInput">
                            <label>Type de Contact:</label>
                            <input type="text" value={contact.type} name="type" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="formInput">
                            <label>Genre:</label>
                            <input type="text" value={contact.genre} name="genre" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="formInput">
                            <label>Addresse</label>
                            <input type="text" value={contact.adresse} name="adresse" onChange={(e) => handleChange(e)}/>
                        </div>
                        <button className="btnUpdate" onClick={updateContact}>Update</button>
                        <ToastContainer autoClose={2000}/>
                        <button className="btnClear" onClick={() => navigate("/contacts")}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditContact