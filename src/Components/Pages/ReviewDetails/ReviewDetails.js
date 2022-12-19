import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ReviewDetails = ({ singleReviews, handleDelete, setReviewUpdate }) => {
  // console.log(reviews);
  const {
    _id,
    title,
    Price,
    img,
    name,
    email,
    customer,
    serviceName,
    status,
    serviceId,
  } = singleReviews;
  
  setReviewUpdate(singleReviews);
  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded  w-12 sm:h-12">
              {singleReviews?.img && (
                <img src={singleReviews?.img} alt="" className="" />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm opacity-50"> Price: ${Price}</div>
          </div>
        </div>
      </td>
      <td>
        {customer}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>

      <th>
        <label htmlFor="my-modal" className="btn">
          update
        </label>
      </th>
    </tr>
  );
};

export default ReviewDetails;
