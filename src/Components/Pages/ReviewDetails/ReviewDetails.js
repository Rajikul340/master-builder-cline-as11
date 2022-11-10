import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ReviewDetails = ({ reviews, handleDelete }) => {
  // console.log(reviews);
  const { _id, title, Price, img, name, email, customer, serviceName, status, serviceId } =
    reviews;
    const [ reviewUpdate, setReviewUpdate] = useState(reviews)

  const handleUpdateForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const value =form.value;
    const field = form.name.value;
    // const title = form.serviceName.value;
    // const Price = form.price.value;
    // const ratings = form.rating.value;
    // const title = form.message.value;
    const newField ={...reviewUpdate}
     newField[field] = value;
    // console.log(Price, img, ratings, serviceName);
    setReviewUpdate(newField)

        form.reset();

    // const servce = {
    //  serviceName: title,
    //   Price,
    //   ratings,
    //   description: [{ title: "" }],
    // };
    // setReviewUpdate(servce)
   
  };

  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body:JSON.stringify(reviewUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success('review update')

      })
      .catch(err=>console.error(err))
  };

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
              {reviews?.img && (
                <img src={reviews?.img} alt="photo" className="" />
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

        {/* The button to open modal */}

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <form onSubmit={handleUpdateForm}
             className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                name="serviceName"
                type="text"
                placeholder="service name"
                className="input input-ghost w-full  input-bordered"
              />
              <input
                name="Price"
                type="number"
                placeholder="price"
                className="input input-ghost w-full  input-bordered"
              />
              <input
                name="ratings"
                type="number"
                placeholder="rating"
                className="input input-ghost w-full  input-bordered"
                required
              />

              <button
                onClick={() => handleUpdate(_id)}
               
                className="btn btn-outline"
              >
                update
              </button>
            </form>

            <div className="modal-action">
              <label htmlFor="my-modal" className="btn" type="submit">
                close
              </label>
            </div>
          </div>
        </div>
      </th>
    </tr>
  );
};

export default ReviewDetails;
