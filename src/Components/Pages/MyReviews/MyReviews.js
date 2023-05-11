import React from "react";
import { UserContext } from "../../AuthContext/AuthContex";
import { useContext, useState, useEffect } from "react";
import ReviewDetails from "../ReviewDetails/ReviewDetails";
import { toast } from "react-toastify";
import useTitle from "../useTitle/useTitle";
import { Snniper } from "../Snniper/Snniper";

const MyReviews = () => {
  const { user, logOut } = useContext(UserContext);
  const [reviews, setReviews] = useState([]);
  const [reviewUpdate, setReviewUpdate] = useState({});
  console.log(reviewUpdate);
  useTitle("my-reviews");

  useEffect(() => {
    fetch(
      `https://maseter-builder-servar.vercel.app/reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const matchingData = data.filter(
          (singleData) => singleData?.email === user?.email
        );
        setReviews(matchingData);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`https://maseter-builder-servar.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = reviews.filter((odr) => odr._id !== id);
            setReviews(remaining);
            toast.success("Deleted successfully");
          }
          if (data.deletedCount === 0) {
          }
        });
    }
  };

  const handleUpdateForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.serviceName.value;
    const price = form.price.value;
    const message = form.message.value;

    form.reset();
    const servce = {
      serviceName: title,
      Price: price,
      message,
    };
    setReviewUpdate(servce);
  };

  const handleUpdate = (id) => {
    fetch(`https://maseter-builder-servar.vercel.app/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("review update");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {/* <h2 className="text-5xl">You have {reviews.length} Orders</h2> */}
      <div className="overflow-x-auto lg:w-full">
        <table className="table lg:w-full">
          {reviews.length === 0 ? (
            <p className="text-center font-semibold">
              no review found. please review
            </p>
          ) : (
            <>
              {" "}
              <thead>
                <tr>
                  <th></th>
                  <th>Service</th>
                  <th>user</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
            </>
          )}
          <tbody>
            {reviews.map((singleReviews) => (
              <ReviewDetails
                key={singleReviews._id}
                singleReviews={singleReviews}
                handleDelete={handleDelete}
                setReviewUpdate={setReviewUpdate}
                // handleStatusUpdate={handleStatusUpdate}
              ></ReviewDetails>
            ))}
            <input type="checkbox" id="my-modal" className="modal-toggle" />

            <div className="modal">
              <div className="modal-box">
                <form
                  onSubmit={handleUpdateForm}
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
                  <textarea
                    name="message"
                    type="text"
                    placeholder="message"
                    className="input input-ghost   input-bordered"
                    required
                  />
                  <button
                    onClick={() => handleUpdate(reviewUpdate._id)}
                    htmlFor="my-modal-6"
                    className="btn  btn-primary"
                  >
                    update
                  </button>
                </form>

                <div className="modal-action">
                  <label htmlFor="my-modal" className="btn btn-primary" type="submit">
                    close
                  </label>
                </div>
              </div>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
