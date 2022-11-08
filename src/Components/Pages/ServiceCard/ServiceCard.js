import React from "react";

const ServiceCard = ({ service }) => {
  console.log(service);
  const{price, img, description, _id, title, ratings} = service;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="cover"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>Price: ${price}</p>
          <p>Ratings :{ratings}</p>
          <div className="card-actions">
            <button className="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
