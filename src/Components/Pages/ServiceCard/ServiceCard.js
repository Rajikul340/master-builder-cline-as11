import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceCard = ({ service }) => {
  console.log(service);
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
          <div className="flex gap-5">
            <p>Price: ${Price}</p>
            <p>Ratings :{ratings}</p>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
