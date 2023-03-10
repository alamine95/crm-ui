import React from 'react'
import "./addContact.scss";
import SideBar from '../../components/sidebar/SideBar';
import { useState } from 'react';
import NavbarContact from '../../components/navbar/NavbarContact';
import ContactService from '../../services/ContactService';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import Update from "../../images/Update.png";
import ContactImage from "../../images/ContactImage.jpg";

const AddContact = () => {
    const [contact, setContact] = useState({
        id: "",
        nom: "",
        prenom: "",
        genre: "",
        adresse: "",
        telephone: "",
        email: "",
        type: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setContact({ ...contact, [e.target.name]: value });
    };

    const saveContact = (e) => {
        e.preventDefault();
        ContactService.saveContact(contact)
            .then((response) => {
                console.log(response);
                toast.success('Nouveau Contact Ajouter');
                navigate("/contacts")
            })
            .catch((error) => {
                toast.error("Error Notification !");
            });
    };

    const reset = (e) => {
        e.preventDefault();
        setContact({
            id: "",
            nom: "",
            prenom: "",
            genre: "",
            adresse: "",
            telephone: "",
            email: "",
            type: ""
        });
    };


    const [file] = useState("");

    return (
        <div className="addContact">
            <SideBar />
            <div className="addContactsContainer">
                <NavbarContact />
                <div className="top">
                    <h1>Add New Contact</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={ContactImage} alt="" />
                    </div>
                    <div className="right">
                        <form action="">
                            <div className="formInput">
                                <label>Nom:</label>
                                <input type="text" name="nom" placeholder="nom"
                                    value={contact.nom}
                                    onChange={(e) => handleChange(e)}
                                    required />
                            </div>
                            <div className="formInput">
                                <label>Prenom:</label>
                                <input type="text" name="prenom" placeholder="prenom"
                                    value={contact.prenom}
                                    onChange={(e) => handleChange(e)}
                                    required></input>
                            </div>
                            <div className="formInput">
                                <label>Email:</label>
                                <input type="email" name="email" placeholder="email"
                                    value={contact.email}
                                    onChange={(e) => handleChange(e)}
                                    required></input>
                            </div>
                            <div className="formInput">
                                <label>Telephone:</label>
                                <input type="tel" name="telephone" placeholder="telephone"
                                    value={contact.telephone}
                                    onChange={(e) => handleChange(e)}
                                    required></input>
                            </div>
                            <div className="formInput">
                                <label>Type de Contact:</label>
                                <select className="form-select mb-4" aria-label="Default select example"
                                    name="type"
                                    value={contact.type}
                                    onChange={(e) => handleChange(e)}>
                                    <option selected>Select Type</option>
                                    <option value="Prospect">Prospect</option>
                                    <option value="Contact">Contact</option>
                                    <option value="Client">Client</option>
                                </select>
                            </div>
                            <div className="formInput">
                                <label>Genre:</label>
                                <select className="form-select mb-4" aria-label="Default select example"
                                    name="genre"
                                    value={contact.genre}
                                    onChange={(e) => handleChange(e)}>
                                    <option selected>Select Genre</option>
                                    <option value="Masculin">Masculin</option>
                                    <option value="Feminin">Feminin</option>
                                </select>
                            </div>
                            <div className="formInput">
                                <label>Addresse:</label>
                                <input type="text" name="adresse" placeholder="adresse"
                                    value={contact.adresse}
                                    onChange={(e) => handleChange(e)}
                                    required />
                            </div>
                            <div className="formInput"></div>
                            <button className="btnSave" onClick={saveContact}>Send</button>
                            <ToastContainer autoClose={2000} />
                            <button className="btnClear" onClick={reset}>Clear</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddContact