import React from 'react'
import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import AccessAlarmsOutlinedIcon from '@mui/icons-material/AccessAlarmsOutlined';

export const Widget = ({ type }) => {
    let data;

    // donnee temporaire
    const amount = 100
    const diff = 20

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlineOutlinedIcon className="icon"/>,
            };
            break;
            case "order":
                data = {
                    title: "CONTACTS",
                    isMoney: false,
                    link: "View all contacts",
                    icon: <PermContactCalendarOutlinedIcon className="icon"/>,
                };
                break;
            case "earning":
                data = {
                    title: "OPPORTUNITY",
                    isMoney: true,
                    link: "View net opportunity",
                    icon: <MonetizationOnOutlinedIcon className="icon"/>,
                };
                break;
            case "balance":
                data = {
                    title: "RENDEZ-VOUS",
                    isMoney: false,
                    link: "Afficher rendez-vous",
                    icon: <AccessAlarmsOutlinedIcon className="icon"/>,
                    };
                break;
            default:
                break;
    }


  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">
                {data.isMoney && "$"} {amount}
            </span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon/>
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}
