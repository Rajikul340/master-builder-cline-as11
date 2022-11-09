import React from "react";
import { toast } from "react-toastify";
import useTitle from "../useTitle/useTitle";

const AddService = () => {
  useTitle('addservice');
  
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.serviceName.value;
    const Price = form.price.value;
    const img = form.img.value;
    const ratings = form.rating.value;
    // const title = form.message.value;
    console.log(Price, img, ratings, serviceName);

    const servce = {
      title: serviceName,
       Price,
       ratings,
      description: [{title:''}],
      img,
    };
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(servce),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("service added");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div className="border my-5 p-5">
      <h4 className="text-3xl font-bold capitalize my-4">Add A service</h4>
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
        <input
          name="img"
          type="text"
          placeholder="service image"
          className="input input-ghost w-full  input-bordered"
          required
        />

        {/* <textarea
          name="message"
          className="textarea textarea-bordered h-48 w-full mt-2"
          placeholder="add service details"
          required
        ></textarea> */}

        <button className="btn btn-outline btn-primary " type="submit">
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
