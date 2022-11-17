import React, { useState } from 'react';
import "./opportunity.scss";
import NavbarContact from '../../components/navbar/NavbarContact';
import SideBar from '../../components/sidebar/SideBar';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from "uuid";

const Opportunity = () => {
  return (
    <div className="opportunity">
        <SideBar/>
        <div className="opportunityContainer">
            <NavbarContact/>
        </div>
    </div>
  )
}

export default Opportunity