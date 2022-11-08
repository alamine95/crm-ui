import React from 'react'
import "./addContact.scss";
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sidebar/SideBar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';

const AddContact = () => {
    const [file] = useState("");
  return (
    <div className="addContact">
        <SideBar/>
        <div className="addContactsContainer">
            <Navbar/>
            <div className="top">
                <h1>Add New Contact</h1>
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
                            <label htmlFor="file">
                                Image: <DriveFolderUploadOutlinedIcon className="icon"/>
                            </label>
                            <input type="text" id="file" style={{display:"none"}} />
                        </div>
                        <div className="formInput">
                            <label>Username</label>
                            <input type="text" placeholder="Lamda_sow" />
                        </div>
                        <div className="formInput">
                            <label>Name and surname</label>
                            <input type="text" placeholder="lamda sow" />
                        </div>
                        <div className="formInput">
                            <label>Email</label>
                            <input type="email" placeholder="lamda@gmail.com" />
                        </div>
                        <div className="formInput">
                            <label>Phone</label>
                            <input type="text" placeholder="+221 33 678 90 87" />
                        </div>
                        <div className="formInput">
                            <label>Password</label>
                            <input type="password" />
                        </div>
                        <div className="formInput">
                            <label>Addresse</label>
                            <input type="text" placeholder="Colobane Dakar" />
                        </div>
                        <div className="formInput">
                            <label>Country</label>
                            <input type="text" placeholder="Senegal" />
                        </div>
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddContact