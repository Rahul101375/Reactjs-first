import React from 'react';

import logo from '../../images/logo.jpg';
import logo1 from '../../images/p2.jpg';

function TopSections(){
    return(
        <div className="topselction">
        <div className="background1">
        <div className="topinnerselection">
        <span style={{flexWrap:"wrap",hover:{border:"2px solid blue"},width:"auto",margin:"20px"}}>
            <span style={{display:"flex"}}>
            <img src={logo} alt="logo" className="img1"/>
            <h2 style={{textTransform:"capitalize",color:"whitesmoke",marginLeft:"15px"}}>Servycing</h2>
            </span>
            <h4 style={{textTransform:"capitalize",color:"#424042"}}>Find the right specialist for the right job</h4>
            <button type="submit">Join now</button>
            </span>

        <span>
            <img src={logo1} alt="Logo"className="Img"/>
        </span>
        </div>
        </div>
        </div>
    );
}
export default TopSections;