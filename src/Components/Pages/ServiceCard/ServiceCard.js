import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
var Rating = require("react-rating");

const ServiceCard = ({ service }) => {
  const { Price, img, description, _id, title, ratings } = service;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <PhotoProvider>
            <PhotoView src={img}>
              <img src={img} style={{ objectFit: "cover" }} alt="" />
            </PhotoView>
          </PhotoProvider>
        </figure>
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
