import React from 'react';
import Image from './image';


function Service(props){
    return(
        <div className="service-container">
            <div className="service-text">
                <p>Most used Services & More</p>
            </div>
            <div className="service-image">
                <Image/>
            </div>
            <div className="services-view">
                <p style={{display:"flex",justifyContent:"center"}}>View More</p>
            </div>
        </div>
    );
}
export default Service;