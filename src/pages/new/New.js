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
          <h1>{title}</h1>
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
                Formulaire
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New