import React, { useContext, useEffect, useLoaderData, useState } from "react";
import { UserContext } from "../../AuthContext/AuthContex";
import { FaBeer, FaUser } from "react-icons/fa";

const Messages = ({ Reviews, setLoad }) => {
  const { user } = useContext(UserContext);
  // console.log(Reviews);
  const { message, image, customer, time } = Reviews;
  const [revMessage, setRevMessage] = useState(message);

  return (
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
        comments: {revMessage}
      </p>
    </div>
  );
};

export default Messages;
