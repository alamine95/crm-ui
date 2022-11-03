import React from 'react'
import "./single.scss";
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sidebar/SideBar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Link } from 'react-router-dom';

export const Single = () => {
  return (
    <div className="single">
      <SideBar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton"> 
              <Link to="/users/editUser" style={{ textDecoration: "none"}}><BorderColorOutlinedIcon />
              </Link> 
            </div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img 
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" 
                alt=""
                className="itemImg" 
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+221 77 809 05 06</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Dakar Colobane
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">SENEGAL</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single