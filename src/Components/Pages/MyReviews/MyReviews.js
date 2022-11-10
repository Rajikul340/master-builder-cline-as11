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
  const [ reviewUpdate, setReviewUpdate] = useState([])
  // console.log(reviews);
  useTitle("my-reviews");

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      // headers: {
      //   authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    })
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
      fetch(`http://localhost:5000/reviews/${id}`, {
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
                // handleStatusUpdate={handleStatusUpdate}
              ></ReviewDetails>
            ))}
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
              <label htmlFor="my-modal-6" className="btn">update</label>
            </form>

          </div>
        </div>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
