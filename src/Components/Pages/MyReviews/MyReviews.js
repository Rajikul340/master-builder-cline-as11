import React from "react";
import { UserContext } from "../../AuthContext/AuthContex";
import { useContext, useState, useEffect } from "react";
import ReviewDetails from "../ReviewDetails/ReviewDetails";
import { toast } from "react-toastify";

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

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you want to cancel this order');
    if (proceed) {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE',
           
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
              
                    const remaining = reviews.filter(odr => odr._id !== id);
                    setReviews(remaining);
                    toast.success("Deleted successfully");

                }
                if(data.deletedCount === 0){
                   
                }
            })
    }
}

  return (
    <div>
    {/* <h2 className="text-5xl">You have {reviews.length} Orders</h2> */}
    <div className="overflow-x-auto w-full">
        <table className="table w-full">
           {
            reviews.length === 0 ? <p className="text-center font-semibold">no review found. please review</p> : <> <thead>
            <tr>
                <th>
                </th>
                <th>Service</th>
                <th>user</th>
                <th>Status</th>
                <th></th>
            </tr>
        </thead></>
           }
            <tbody>
                {
                    reviews.map(reviews => <ReviewDetails
                        key={reviews._id}
                        reviews={reviews}
                        handleDelete={handleDelete}
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
