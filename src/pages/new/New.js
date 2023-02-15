import React from 'react'
import "./new.scss";
import SideBar from "../../components/sidebar/SideBar.js";
import Navbar from "../../components/navbar/Navbar.js";
import { useState } from "react";

export const New = () => {
  
  const [user, setUser] = useState({
    id: "",
    nom: "",
    prenom: "",
    email: "",
    phone: "",
    password: "",
    profile: ""
  });

  const reset = (e) => {
    e.preventDefault();
    setUser({
      id: "",
      nom: "",
      prenom: "",
      email: "",
      phone: "",
      password: "",
      profile: ""
    });
  };

  const [file] = useState("");

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
                  <label>Nom:</label>
                  <input type="text" placeholder="John_doe" value={user.nom} />
                </div>
                <div className="formInput">
                  <label>Prenom:</label>
                  <input type="text" placeholder="John doe" value={user.prenom} />
                </div>
                <div className="formInput">
                  <label>Email:</label>
                  <input type="email" placeholder="lamda@gmail.com" value={user.email} />
                </div>
                <div className="formInput">
                  <label>Phone:</label>
                  <input type="text" placeholder="+221 77 832 65 42" value={user.phone} />
                </div>
                <div className="formInput">
                  <label>Password:</label>
                  <input type="password"  value={user.password}/>
                </div>
                <div className="formInput">
                  <label>Profile:</label>
                  <input type="text" placeholder="Colobane Dakar" value={user.profile}/>
                </div>
                <button className="btnSend">Save</button>
                <button className="btnClear" onClick={reset}>Clear</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New