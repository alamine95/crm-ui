import React, { useState } from 'react';
import "./opportunity.scss";
import NavbarContact from '../../components/navbar/NavbarContact';
import SideBar from '../../components/sidebar/SideBar';

import BoardContent from './BoardContentt/BoardContent';

const Opportunity = () => {
  return (
    <div className="opportunity">
        <SideBar/>
        <div className="opportunityContainer">
            <NavbarContact/>
            <BoardContent/>
        </div>
    </div>
  )
}

export default Opportunity