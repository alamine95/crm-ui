import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sidebar/SideBar';
import "./editUser.scss";
import { useState } from 'react';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const EditUsers = () => {
    const [file, setFie ] = useState("");
  return (
    <div className="editUser">
        <SideBar/>
        <div className="editUserContainer">
            <Navbar/>
            <div className="top">
                <h1>Edit single User</h1>
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
                    <form action="submit">
                        <div className="formInput">
                            <label htmlFor="file">
                                Image: <DriveFolderUploadOutlinedIcon className="icon"/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <div className="formInput">
                            <label>Username</label>
                            <input type="text" placeholder='John_doe' />
                        </div>
                        <div className="formInput">
                            <label>Name And surname</label>
                            <input type="text" placeholder='John doe' />
                        </div>
                        <div className="formInput">
                            <label>Email</label>
                            <input type="emal" placeholder='lamda@gmail.com' />
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

export default EditUsers