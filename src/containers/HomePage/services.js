import React, { useEffect, useState } from 'react';
import Axios from 'axios';

 function Services(props){
    const [offeredServices,setServices]=useState([]);
    const [isLoading, setLoading]=useState(false);

    const isServicesEmpty = !offeredServices || (offeredServices && offeredServices.length === 0);
    const fetchServices= async()=>{
        const response = await Axios.get("http://localhost:9000/services")
        .catch((err)=>{
            console.log("Error: ",err);
        }
        );

    if(response){
        setServices(response.data);
    }
    setLoading(false); 
}
useEffect(()=>{
    fetchServices();
},[]);

return(
    <>
    </>
)
}
export default Services;