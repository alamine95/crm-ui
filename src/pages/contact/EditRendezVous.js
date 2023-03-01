import React, { useState} from 'react'
import NavbarContact from '../../components/navbar/NavbarContact'
import SideBar from '../../components/sidebar/SideBar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useParams } from 'react-router-dom';
import './editRendezVous.scss'

const EditRendezVous = () => {

    const {id} = useParams();
    const [file, setFile] = useState("");
  return (
    <div className="editRendezVous">
        <SideBar/>
        <div className="editRendezVousContainer">
            <NavbarContact/>
            <div className="top">
                <div className="modalBtn">

                </div>
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
                                Image: <DriveFolderUploadOutlinedIcon className="icon" />
                            </label>
                            <input type="file" id="file" style={{ display: "none "}} />
                        </div>
                        <div className="formInput">
                            <label htmlFor="">Date:</label>
                            <input type="text" name="nom" />
                        </div>
                        <div className="formInput">
                            <label htmlFor="">Heur:</label>
                            <input type="time" name="nom" />
                        </div>
                        <div className="formInput">
                            <label htmlFor="">Object:</label>
                            <input type="text" name="object" />
                        </div>
                        <button className="btnUpdate">Update</button>
                        <button className="btnClear">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditRendezVous