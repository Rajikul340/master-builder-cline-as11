import React from "react";
import { UserContext } from "../../AuthContext/AuthContex";
import { useContext, useState, useEffect } from "react";
import ReviewDetails from "../ReviewDetails/ReviewDetails";

const MyReviews = () => {
  const { user, logOut } = useContext(UserContext);
  const [reviews, setReviews] = useState([]);
console.log(reviews);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
  
    })
      .then((res) =>res.json())
      .then((data) => { 
         console.log(data);
        setReviews(data);
      });
  }, [user?.email]);

  return (
    <div>
    {/* <h2 className="text-5xl">You have {reviews.length} Orders</h2> */}
    <div className="overflow-x-auto w-full">
        <table className="table w-full">
            <thead>
                <tr>
                    <th>
                    </th>
                    <th>Name</th>
                    <th>Service</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    reviews.map(reviews => <ReviewDetails
                        key={reviews._id}
                        reviews={reviews}
                        // handleDelete={handleDelete}
                        // handleStatusUpdate={handleStatusUpdate}
                    ></ReviewDetails>)
                }
            </tbody>
        </table>
    </div>
</div>
  );
};

export default MyReviews;
