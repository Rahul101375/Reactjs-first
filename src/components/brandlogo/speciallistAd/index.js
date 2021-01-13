import React from 'react';
import office from '../../../images/thumbnails/office.jpg'
import logo from '../../../images/logo.jpg'

export default function SpecailAd(){
    return(
        <div className="specail-container">
            <div className="specail-logo" style={{hover:{border:"1px solid yellow"}}}>
            <div className="log" style={{marginLeft:"15px"}}>
            <span style={{display:"flex"}}>
            <img src={logo} alt="logo" className="img1"/>
            <h2 style={{textTransform:"capitalize",color:"whitesmoke",marginLeft:"6px"}}>Servycing</h2>
            </span>
            <h4 style={{width:"250px",overflow:"hidden"}}>
                You are specaillist, and you have an outstanding </h4>
            <span>Services to Waiver ?</span>
            <h5 style={{border:"1px solid yellow",width:"130px",height:"30px",background:"#1c9e86",
            display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",color:"whitesmoke",cursor:"pointer"}}>
             Join as Specaillist</h5>
            </div>
            </div>

            <div className="specail-photo">
                <img src={office} alt="OFFICE" style={{width:"300px",height:"250px",boxShadow:"inset 0 0 7px",borderRadius:"8px"}}/>
            </div>
        </div>
    );
}