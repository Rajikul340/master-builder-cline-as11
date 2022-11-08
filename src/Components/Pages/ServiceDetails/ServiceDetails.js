import React from "react";
import { useLoaderData } from "react-router-dom";
import {useContext} from 'react';
import { toast } from "react-toastify";
import { UserContext } from "../../AuthContext/AuthContex";

const ServiceDetails = () => {
  const ServiceDetails = useLoaderData();
  const { description, img, price, _id } = ServiceDetails;
  const { title, body } = description[0];
  const{user} = useContext(UserContext)

  const handleReviews = event =>{
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || 'unregistered';
    const rating = form.rating.value;
    const message = form.message.value;

    const review = {
        serviceId: _id,
        serviceName:ServiceDetails?.title,
        price,
        customer: name,
        email,
        rating,
        message,
        img:user?.photoURL,
    }
    fetch('http://localhost:5000/reviews',{
        method:"POST",
        headers:{
            'content-type' :'application/json'
        },
        body: JSON.stringify(review)
      })
      .then(res => res.json())
      .then(data => {
          console.log(data)
          if(data.acknowledged){
            //   alert('Order placed successfully')
              toast.success('review added')
              form.reset();
              
          }
      })
      .catch(er => console.error(er));
    
  }

 

 

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
            <small>{ServiceDetails.title}</small>
          </p>
        </div>
        <div className="w-6/12 mx-auto">
          <p className="text-2xl capitalize">{body?.slice(0, 1000)}</p>
        </div>
      </div>
      </section>
            {/* review section  */}
            <section className='border my-5 p-5'>
                     <form onSubmit={handleReviews} className=''>
              
                <h4 className="text-3xl font-bold capitalize my-4"> please review  {ServiceDetails.title}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="rating" type="number" placeholder="rating" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-96 w-full mt-2" placeholder="Your Message" required></textarea>

                <input className='btn btn-outline btn-primary' type="submit" value=" review" />
            </form>

            </section>
    </div>
  );
};

export default ServiceDetails;
