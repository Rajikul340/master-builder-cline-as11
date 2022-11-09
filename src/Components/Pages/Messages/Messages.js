import React, { useContext, useEffect, useLoaderData, useState } from 'react';
import { UserContext } from '../../AuthContext/AuthContex';



const Messages = ({Reviews}) => {
  const{user} =useContext(UserContext);
    // console.log(Reviews);
  const{serviceId, price, message} =Reviews;
 
  const[revMessage, setRevMessage] = useState(message)
   console.log(revMessage);


    return (
      <div>
       <div className='flex gap-2 my-2 '>
        <img className='w-10 rounded-full' src={user?.photoURL ? user?.photoURL : ''} alt="" />
       <p  className='mt-3'>{user?.displayName}</p>
    
       </div>
       <p>comments: {revMessage}</p>
      </div>
    );
};

export default Messages;