import React from 'react';
import Flower from '../images/logos/flower.jpg';
import Car from '../images/logos/car.jpg';
import Garden from '../images/logos/garden.jpg';
import Grass from '../images/logos/grass.jpg';
import {FaStar} from 'react-icons/fa'

function Image(){
    return(
        <div className="img2">
        <div style={{border:"1px solid blue",height:"330px",margin:"15px"}}>
        <img src={Garden} alt="logo" className="img3"/>
        <h3 style={{marginTop:"5px"}}>I will landscape your flower</h3>
        <p style={{width:"20px",background:"silver",border:"2px solid silver",height:"20px",borderRadius:"50%",marginLeft:"5px"}}>
        <span style={{marginLeft:"30px",letterSpacing:"2px"}}>Kanemarker</span></p>
        <p style={{borderBottom:"1px solid silver"}}></p>
        <div style={{display:"flex",justifyContent:"space-between",margin:"10px"}}>
            <h4 style={{color:"yellow",marginTop:"0px"}}><FaStar/><span>5.0</span></h4>
            <p style={{marginTop:"0px"}}>Starting Rate
                <span><b style={{margin:'3px'}}>$</b>1170</span>
            </p>
        </div>
        </div>
         
        <div style={{border:"1px solid blue",height:"330px",margin:"15px"}}>
        <img src={Car} alt="logo" className="img3"/>
        <h3 style={{marginTop:"5px"}}>I will landscape your flower</h3>
        <p style={{width:"20px",background:"silver",border:"2px solid silver",height:"20px",borderRadius:"50%",marginLeft:"5px"}}>
        <span style={{marginLeft:"30px",letterSpacing:"2px"}}>Kanemarker</span></p>
        <p style={{borderBottom:"1px solid silver"}}></p>
        <div style={{display:"flex",justifyContent:"space-between",margin:"10px"}}>
            <h4 style={{color:"yellow",marginTop:"0px"}}><FaStar/><span>5.0</span></h4>
            <p style={{marginTop:"0px"}}>Starting Rate
                <span><b style={{margin:'3px'}}>$</b>1170</span>
            </p>
        </div>
        </div>

        <div style={{border:"1px solid blue",height:"330px",margin:"15px"}}>
        <img src={Flower} alt="logo" className="img3"/>
        <h3 style={{marginTop:"5px"}}>I will landscape your flower</h3>
        <p style={{width:"20px",background:"silver",border:"2px solid silver",height:"20px",borderRadius:"50%",marginLeft:"5px"}}>
        <span style={{marginLeft:"30px",letterSpacing:"2px"}}>Kanemarker</span></p>
        <p style={{borderBottom:"1px solid silver"}}></p>
        <div style={{display:"flex",justifyContent:"space-between",margin:"10px"}}>
            <h4 style={{color:"yellow",marginTop:"0px"}}><FaStar/><span>5.0</span></h4>
            <p style={{marginTop:"0px"}}>Starting Rate
                <span><b style={{margin:'3px'}}>$</b>1170</span>
            </p>
        </div>
        </div>

        <div style={{border:"1px solid blue",height:"330px",margin:"15px"}}>
        <img src={Grass} alt="logo" className="img3"/>
        <h3 style={{marginTop:"5px"}}>I will landscape your flower</h3>
        <p style={{width:"20px",background:"silver",border:"2px solid silver",height:"20px",borderRadius:"50%",marginLeft:"5px"}}>
        <span style={{marginLeft:"30px",letterSpacing:"2px"}}>Kanemarker</span></p>
        <p style={{borderBottom:"1px solid silver"}}></p>
        <div style={{display:"flex",justifyContent:"space-between",margin:"10px"}}>
            <h4 style={{color:"yellow",marginTop:"0px"}}><FaStar/><span>5.0</span></h4>
            <p style={{marginTop:"0px"}}>Starting Rate
                <span><b style={{margin:'3px'}}>$</b>1170</span>
            </p>
        </div>
        </div>
        </div>
    );
}
export default Image;