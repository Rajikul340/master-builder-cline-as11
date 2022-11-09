import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import MyReviews from "../MyReviews/MyReviews";
import ReviewDetails from "../ReviewDetails/ReviewDetails";

const UpdateReviews = () => {
    const data = useLoaderData();
    console.log(data);



const handleAddService= (event) =>{

}
       
 




  return (

    <div className="border my-5 p-5">
      <h4 className="text-3xl font-bold capitalize my-4">update your review</h4>
      <form
        onSubmit={handleAddService}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        <input
          name="serviceName"
          type="text"
          placeholder="service name"
          className="input input-ghost w-full  input-bordered"
        />
        <input
          name="price"
          type="number"
          placeholder="price"
          className="input input-ghost w-full  input-bordered"
        />
        <input
          name="rating"
          type="number"
          placeholder="rating"
          className="input input-ghost w-full  input-bordered"
          required
        />

       <button type='submit' className="btn btn-outline">update</button>
        
      </form>
    </div>

  );
}


export default UpdateReviews;
