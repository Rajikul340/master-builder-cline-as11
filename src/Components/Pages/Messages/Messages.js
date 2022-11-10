import React, { useContext, useEffect, useLoaderData, useState } from "react";
import { UserContext } from "../../AuthContext/AuthContex";
import { FaBeer, FaUser } from "react-icons/fa";

const Messages = ({ Reviews, setLoad }) => {
  const { user } = useContext(UserContext);
  // console.log(Reviews);
  const { serviceId, price, message, image, customer, time, date } = Reviews;

  const [revMessage, setRevMessage] = useState(message);
  console.log(revMessage);

  return (
    <div>
      <div className="flex gap-2 my-2 ">
        <img
          className="w-10 rounded-full"
          referrerPolicy="no-referrer"
          src={image}
          alt=""
        />
        <p className="mt-3">{customer}</p>
      </div>
      <p>
        comments: {revMessage} <small>{time}</small>
      </p>
    </div>
  );
};

export default Messages;
