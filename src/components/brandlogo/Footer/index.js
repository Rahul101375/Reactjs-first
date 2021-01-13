import React from 'react';
import {FaFacebook,FaTwitter} from 'react-icons/fa';

export default function Footer(){
    return(
        <>
        <div className="footer-container">
            <div className="category-1">
           <div className="category">
               <h4>Categories</h4>
               <li>Car repair</li>
               <li>Carpentry</li>
               <li>Cleaning</li>
               <li>Demolition</li>
               <li>Home improvement</li>
               <li>Landscaping</li>
               <li>Moving</li>
               <li>Others</li>
           </div>
           <div className="access">
               <h4>Access</h4>
               <li>Login</li>
               <li>Join us</li>
               <li>Login as Specaillist</li>
               <li>Become a Specaillist</li>
           </div>
           </div>
        </div>

            <div className="footer-icons">
                <div style={{display:"flex",flexWrap:"wrap",color:"#8e9191"}}>
                    <p style={{padding:"5px",margin:"5px",fontWeight:"bold"}}>Servycing</p>
                    <p style={{padding:"5px",margin:"5px"}}> c All Right @2020</p>
                </div>
                <div style={{display:"flex",flexWrap:"wrap"}}>
                    <FaFacebook style={{padding:"5px",margin:"5px",fontSize:"25px" ,color:"silver"}}/>
                    <FaTwitter style={{padding:"5px",margin:"5px",fontSize:"25px",color:"silver"}}/>
                </div>
            </div>
        </>
    );
}