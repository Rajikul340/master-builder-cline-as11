import React from "react";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import Success from "../Success/Success";
import TeamSection from "../TeamSection/TeamSection";
import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { Link } from "react-router-dom";
import useTitle from "../useTitle/useTitle";

const Home = () => {
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
      <Banner></Banner>
      <TeamSection></TeamSection>
      <Success></Success>

      <div>
        <h3 className="text-center text-4xl my-5 font-bold uppercase">
          My services
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>

        <div className="text-right mb-5">
          <Link to="/service">
            {" "}
            <button className="btn btn-outline btn-primary px-5">
              See All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
