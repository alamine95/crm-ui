import React from 'react'
import './campagne.scss'
import NavbarContact from '../../components/navbar/NavbarContact'
import SideBar from '../../components/sidebar/SideBar'
import ListeContact from '../contact/ListeContact'
import ListeCampagne from './ListeCampagne'

const Campagne = () => {
  return (
    <div className="campagne">
        <SideBar/>
        <div className="campagneContainer">
            <NavbarContact/>
            <ListeCampagne/>
        </div>
    </div>
  )
}

export default Campagne