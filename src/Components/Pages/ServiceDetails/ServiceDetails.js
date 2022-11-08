import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const ServiceDetails = useLoaderData();
  console.log(ServiceDetails);
  const { description, img } = ServiceDetails;
  const { title, body } = description[0];
  console.log(body.length);

  return (
    <div className="m-5">
      <h3 className="font-bold lg:text-4xl capitalize lg:w-3/5 my-5">
        {title}
      </h3>
      <div className="flex gap-5">
        <div className="w-6/12">
          <img src={img} alt="" />
          <p>
            <small>{ServiceDetails.title}</small>
          </p>
        </div>
        <div className="w-6/12">
          <p className="text-2xl capitalize">{body?.slice(0, 1000)}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
