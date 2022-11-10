import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import { Snniper } from "../Snniper/Snniper";
import useTitle from "../useTitle/useTitle";

const Service = () => {
  const [services, setServices] = useState([]);
  const [loader, setLoader] = useState(false);
  useTitle("service");

  useEffect(() => {
    setLoader(true);
    fetch("https://maseter-builder-servar.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.length);
        setServices(data);

        setLoader(false);
      });
  }, []);

  return (
    <div>
      <h3 className="text-center text-4xl my-5 font-bold uppercase">
        My services
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {loader ? (
          <Snniper />
        ) : (
          services?.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))
        )}
      </div>
    </div>
  );
};

export default Service;
