import React from 'react'
import "./navbarContact.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
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
                    <KeyboardArrowDownOutlinedIcon className="icon"/>
                    {/* <Link to="/users" > */}
                        <div className="dropdown">
                            <span>Rendez-Vous</span>
                            <div className="dropdown-content">
                                <Link>Afficher</Link><br />
                                <Link>Planifier</Link>
                            </div>
                        </div>
                    {/* </Link> */}
                </div>
                <div className="item">
                    <KeyboardArrowDownOutlinedIcon className="icon"/>
                    {/* <Link to="/users" > */}
                        <div className="dropdown">
                            <span>Opportunity</span>
                            <div className="dropdown-content">
                                <Link to="">Nouveau</Link><br />
                                <Link to="/contacts/opportunity">Afficher</Link>
                            </div>
                        </div>
                    {/* </Link> */}
                </div>
                <div className="item">
                    <KeyboardArrowDownOutlinedIcon className="icon"/>
                    {/* <Link to="/users/listeProfile" > */}
                        <div className="dropdown">
                            <span>Contact</span>
                            <div className="dropdown-content">
                                <Link to="/contacts/new">Creer</Link><br />
                                <Link to="">Importer</Link><br />
                                <Link to="/contacts">Lister</Link>
                            </div>
                        </div>

                    {/* </Link> */}
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