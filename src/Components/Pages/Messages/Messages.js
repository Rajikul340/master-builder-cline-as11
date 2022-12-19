import React, { useContext, useEffect, useLoaderData, useState } from "react";
import { UserContext } from "../../AuthContext/AuthContex";
import { FaBeer, FaUser } from "react-icons/fa";

const Messages = ({ Review, load }) => {
  const { user } = useContext(UserContext);
  console.log(Review);
  // const [revMessage, setRevMessage] = useState('');
  const { message, image, customer, time } = Review;
  

  
    

  return (
<>


{
  load ? <p>Loading....</p> : 
  <div>
  <div className="flex gap-2 my-2 ">
    <img
      className="w-10 rounded-full"
      referrerPolicy="no-referrer"
      src={image}
      alt=""
    />
    <p className="mt-3">{customer}  <small className="font-bold">{time}</small></p>
  </div>
  <p>
    comments: {message}
  </p>
</div>
}

</>
  );
};

export default Messages;
