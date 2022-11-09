import React from 'react';
import {Link} from 'react-router-dom'

const ReviewDetails = ({reviews,handleDelete,handleStatusUpdate}) => {
    console.log(reviews);
    const{_id, title, Price, img, name, email, customer, serviceName, status} = reviews



    return (

            <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded  w-12 sm:h-12">
                            {
                                reviews?.img && 
                                <img src={reviews?.img} alt="photo" className='' />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50"> Price: ${Price}</div>
                    </div>
                </div>
            </td>
            <td>
                {customer}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
           
            <th>
              <Link to='/updateReview'>  <button 
                onClick={() => handleStatusUpdate(_id)}
                className="btn btn-ghost btn-xs">{status ? status : 'updated'}</button></Link>
            </th>
        </tr>
     
    );
};

export default ReviewDetails;