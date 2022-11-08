import React from 'react';

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
                        <div className="rounded w-24 h-24">
                            {
                                reviews?.img && 
                                <img src={reviews?.img} alt="photo" className='rounded' />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">Price: ${Price}</span>
            </td>
            <td>Purple</td>
            <th>
                <button 
                onClick={() => handleStatusUpdate(_id)}
                className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </th>
        </tr>
     
    );
};

export default ReviewDetails;