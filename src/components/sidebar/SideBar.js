// import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InsertChartRoundedIcon from '@mui/icons-material/InsertChartRounded';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import logo1 from "../../images/logo1.png";
import logo2 from "../../images/logo2.png";

export const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            {/* <span className='logo'>crmadmin</span> */}
            <img src={logo2} alt="" style={{ width: "100%", height: "82px"}} />
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <Link to="/" style={{ textDecoration: "none"}}>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <PersonOutlineOutlinedIcon className="icon"/>
                    <Link to="/users" style={{ textDecoration: "none"}}>
                        <span>Admin</span>
                    </Link>
                </li>
                <li>
                    <PermContactCalendarOutlinedIcon className="icon"/>
                    <Link to="/contacts" style={{ textDecoration: "none"}}>
                        <span>Contacts</span>
                    </Link>
                </li>
                <li>
                    <AddBusinessOutlinedIcon className="icon"/>
                    <span>Opportunity</span>
                </li>
                <li>
                    <AssignmentTurnedInOutlinedIcon className="icon"/>
                    <span>Rendez-vous</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <InsertChartRoundedIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsOutlinedIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <PsychologyOutlinedIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsOutlinedIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleOutlinedIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppOutlinedIcon className="icon"/>
                    <span>Logout</span>
                </li>                   
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default SideBar;
