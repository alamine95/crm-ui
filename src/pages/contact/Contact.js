import React from 'react'
import "./contact.scss";
import NavbarContact from '../../components/navbar/NavbarContact'
import SideBar from '../../components/sidebar/SideBar'
import ListeContact from './ListeContact';

const Contact = () => {
  return (
    <div className="contact">
        <SideBar/>
        <div className="contactContainer">
            <NavbarContact/>
            <ListeContact/>
        </div>
    </div>
  )
}

export default Contact