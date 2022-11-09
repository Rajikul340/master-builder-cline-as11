import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../AuthContext/AuthContex";
import PrivateRoute from "../../Routes/PrivateRoute";
import Messages from "../Messages/Messages";

const ServiceDetails = () => {
  const ServiceDetails = useLoaderData();
  const { description, img, Price, _id } = ServiceDetails;
  const { title, body } = description[0];
  const { user } = useContext(UserContext);
  const[allReviews, setAllReviews] =useState([]);


     useEffect(()=>{
         fetch('http://localhost:5000/reviews')
         .then(res=>res.json())
         .then(data=>{
         
        
          const Rdata = data.filter(RevId =>RevId.serviceId === _id)
          console.log(Rdata);

          setAllReviews(Rdata)

         }) 
     },[])
 

  const handleReviews = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    // const rating = form.rating.value;
    const message = form.message.value;

    const review = {
      serviceId: _id,
      serviceName: ServiceDetails?.title,
      Price,
      customer: user?.displayName,
      email,
      // rating,
      message,
      img,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("review added");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div className="m-5">
      {/* service-details section */}
      <section>
        <h3 className="font-bold lg:text-4xl capitalize lg:w-3/5 my-5">
          {title}
        </h3>
        <div className="lg:flex gap-5 ">
          <div className="w-6/12 mx-auto">
            <img src={img} alt="" />
            <p>
              <small>{ServiceDetails?.title}</small>
            </p>
          </div>
          <div className="w-6/12 mx-auto">
            <p className="text-2xl capitalize">{body?.slice(0, 1000)}</p>
          </div>
        </div>
      </section>
      {/* review section  */}
      <section className="border my-5 p-5">
        <form onSubmit={handleReviews} className="">
          <h4 className="text-3xl font-bold capitalize my-4">
            {" "}
            please review {ServiceDetails.title}
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" /> */}
            {/* <input name="rating" type="number" placeholder="rating" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly /> */}
          </div>
          <textarea
            name="message"
            className="textarea textarea-bordered h-48 w-full mt-2"
            placeholder="Your Message"
            required
          ></textarea>

          {user?.email ? (
            <button className="btn btn-outline btn-primary" type="submit">
              Review
            </button>
          ) : (
            <>
              <PrivateRoute>
                {" "}
                <button className="btn btn-outline btn-primary" type="submit">
                  Review
                </button>
              </PrivateRoute>
            </>
          )}
        </form>
      </section>

      <section>
        <div>
          {
allReviews?.map(Reviews=><Messages
 key={Reviews._id}
 Reviews={Reviews}
></Messages>)
          }
        </div>
      </section>

     
    </div>
  );
};

export default ServiceDetails;
