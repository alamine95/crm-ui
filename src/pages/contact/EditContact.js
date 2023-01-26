import React from 'react'
import NavbarContact from '../../components/navbar/NavbarContact';
import SideBar from '../../components/sidebar/SideBar';
import './editContact.scss';
import { useState } from 'react';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const EditContact = () => {
    const [file, setFile] = useState("");
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
                            <label htmlFor="">Username</label>
                            <input type="text" placeholder='Lamda' />
                        </div>
                        <div className="formInput">
                            <label htmlFor="">Name And surname</label>
                            <input type="text" placeholder='Lamine Sow' />
                        </div>
                        <div className="formInput">
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='Lamine Sow' />
                        </div>
                        <div className="formInput">
                            <label>Phone</label>
                            <input type="text" placeholder='+221 77 890 70 85' />
                        </div>
                        <div className="formInput">
                            <label>Password</label>
                            <input type="password"/>
                        </div>
                        <div className="formInput">
                            <label>Addresse</label>
                            <input type="text" placeholder='Colobane Dakar' />
                        </div>
                        <div className="formInput">
                            <label>Country</label>
                            <input type="text" placeholder='Senegal' />
                        </div>
                        <button>Update</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditContact