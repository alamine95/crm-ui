import React from 'react'
import "./new.scss";
import SideBar from "../../components/sidebar/SideBar.js";
import Navbar from "../../components/navbar/Navbar.js";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from "react";

export const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  return (
    <div className="new">
      <SideBar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add new user</h1>
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
                  <input type="file" id="file" style={{display:"none"}}/>
                </div>
                <div className="formInput">
                  <label>Username</label>
                  <input type="text" placeholder="John_doe" />
                </div>
                <div className="formInput">
                  <label>Name and surname</label>
                  <input type="text" placeholder="John doe" />
                </div>
                <div className="formInput">
                  <label>Email</label>
                  <input type="email" placeholder="lamda@gmail.com" />
                </div>
                <div className="formInput">
                  <label>Phone</label>
                  <input type="text" placeholder="+221 77 832 65 42" />
                </div>
                <div className="formInput">
                  <label>Password</label>
                  <input type="password" />
                </div>
                <div className="formInput">
                  <label>Addresse</label>
                  <input type="text" placeholder="Colobane Dakar"/>
                </div>
                <div className="formInput">
                  <label>Country</label>
                  <input type="password" placeholder="Senegal" />
                </div>
                <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New