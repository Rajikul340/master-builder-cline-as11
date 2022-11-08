import React from "react";
import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";


const Service = () => {
    const[services, setServices] = useState([]);
   
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setServices(data)
            
        })
    },[])

    return (
        <div>
            <h3 className="text-center text-4xl my-5 font-bold uppercase">My services</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {
                    services.map(service =><ServiceCard
                     key={service._id}
                     service={service}
                    ></ServiceCard>)
                }
            </div>

         <div className="text-right mb-5">
                 <Link to='/service'> <button className="btn btn-outline btn-primary px-5">See All</button></Link>
         </div>
        </div>
    );
};

export default Service;
