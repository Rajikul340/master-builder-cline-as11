import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';
import { AiFillDribbbleSquare } from 'react-icons/ai';
import useTitle from '../useTitle/useTitle';

const ServiceSection = () => {

    const [services, setServices] = useState([]);

    useTitle("home");
    useEffect(() => {
      fetch("https://maseter-builder-servar.vercel.app/home")
        .then((res) => res.json())
        .then((data) => {
          setServices(data);
        });
    }, []);
  


    return (
        <div>
        <h1 className="uppercase text-[#3ABFF8]  flex items-center  my-10 font-bold md:text-4xl text-2xl mx-5">
            <span>
              <AiFillDribbbleSquare size={32} />
            </span>
            <span>  my services</span>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
          </div>
  
          <div className="text-right mb-5">
            <Link to="/service">
              <button className="btn btn-outline btn-primary px-5">
                See All
              </button>
            </Link>
          </div>
        </div>
    );
};

export default ServiceSection;