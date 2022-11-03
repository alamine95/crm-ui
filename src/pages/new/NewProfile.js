import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import SideBar from '../../components/sidebar/SideBar'
import "./newProfile.scss";
import { useState } from 'react';

const NewProfile = () => {
    const [file, setFile] = useState("");
  return (
    <div className="newProfile">
        <SideBar/>
        <div className="profileContainer">
            <Navbar/>
            <div className="top">
                <h1>Creer Profile</h1>
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
                            <label>Profile</label>
                            <input type="text" placeholder="Profile" />
                        </div>
                        <div className="formInput">
                            <label>Description</label>
                            <input type="text" placeholder="Description du profile" />
                        </div>
                        <div className="formInput">
                            <label>Role</label>
                            
                            <select name="roles" id="roles">
                                <option value="volvo">Edite</option>
                                <option value="saab">Read</option>
                                <option value="mercedes">Delete</option>
                                <option value="audi">Update</option>
                            </select>

                        </div>
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewProfile