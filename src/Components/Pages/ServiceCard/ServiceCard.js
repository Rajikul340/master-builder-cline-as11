import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


const ServiceCard = ({ service }) => {
  const { Price, img, description, _id, title, ratings } = service;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <motion.div
        whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} 
         className="px-10 pt-10">
      
              <img src={img}  alt="" />
        
        </motion.div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{`${
            description[0]?.body
              ? description[0]?.body?.slice(0, 100) + "..."
              : " "
          } `}</p>
          <div className="flex gap-5">
            <p className="font-bold">Price: ${Price}</p>
            <p className="font-bold">Ratings :{ratings}</p>
          </div>
          <div className="card-actions">
            <Link to={`/service/${_id}`}>
              {" "}
              <button className="btn btn-primary">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
