import React from 'react'
import "./navbarContact.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import { Link } from 'react-router-dom';

const NavbarContact = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder="Search..." />
                <SearchOutlinedIcon/>
            </div>
            <div className="items">
                <div className="item">
                    <Person2OutlinedIcon className="icon"/>
                    <Link to="/users" >
                        Utilisateurs
                    </Link>
                </div>
                <div className="item">
                    <PortraitOutlinedIcon className="icon"/>
                    <Link to="/users/listeProfile" >
                        Profile
                    </Link>
                </div>
                <div className="item">
                    <FullscreenExitOutlinedIcon className="icon"/>
                </div>
                <div className="item">
                    <NotificationsNoneOutlinedIcon className="icon"/>
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <ChatBubbleOutlineOutlinedIcon className="icon"/>
                    <div className="counter">2</div>
                </div>
                <div className="item">
                    <ListOutlinedIcon className="icon"/>
                </div>
                <div className="item">
                    <img
                    src="https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_960_720.jpg"
                    alt="Avatar"
                    className="avatar"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavbarContact
