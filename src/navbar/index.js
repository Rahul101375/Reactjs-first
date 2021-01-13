import React from 'react';
import Register from './Register';
import SpecialListPortal from './SpecialListPortal';
import Login from './Login';
import logo from '../images/logo.jpg';
import {Link} from 'react-router-dom';

function Navbar(props){
    return(
        <div className="navbar">
            <div className="log" style={{marginLeft:"15px"}}>
            <span style={{display:"flex"}}>
            <img src={logo} alt="logo" className="img1"/>
            <h2 style={{textTransform:"capitalize",color:"whitesmoke",marginLeft:"10px"}}>Servycing</h2>
            </span>
            </div>
            <div className="login-system">
              <Link to='/customer/specaillistportal' 
              style={{marginLeft:"10px",marginRight:"10px",textDecoration:"none",color:"#3A6073"}}>
              SpecialListPortal</Link>
              <Link to='/customer/register' 
              style={{marginLeft:"10px",marginRight:"10px",textDecoration:"none",color:"#fff",background:"#076585"}}>Register</Link>

              <Link to='/customer/login'
               style={{marginLeft:"10px",marginRight:"10px",textDecoration:"none",color:"#3A6073"}}>Login</Link>
            </div>
        </div>
    );
}
export default Navbar;