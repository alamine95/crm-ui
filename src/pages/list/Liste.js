import React from 'react'
import Datatable from '../../components/datatable/Datatable';
import { Navbar } from '../../components/navbar/Navbar';
import { SideBar } from '../../components/sidebar/SideBar';
import "./liste.scss";

export const Liste = () => {
  return (
    <div className="list">
        <SideBar/>
        <div className="listContainer">
          <Navbar/>
          <Datatable/>
        </div>
    </div>
  )
}

export default Liste