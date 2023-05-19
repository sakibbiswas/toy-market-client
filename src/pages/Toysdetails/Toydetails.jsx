import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Toydetails = () => {
    const Toydetails = useLoaderData()
    const { Name, Seller, img, Available_Quantity
        , price, description
        , _id, Rating } = Toydetails;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={img} className='rounded-xl ' alt="Album" /></figure>
            <div className="card-body">
                <h2 className="font-semibold text-zinc-600">
                    <strong>Products Name</strong> : {Name}</h2>
                <h2 className="font-semibold text-zinc-600"><strong>Rating</strong>: {Rating}</h2>
                <p className="font-semibold text-zinc-600"><strong>Price</strong>: $ {price}</p>
                <p className="font-semibold text-zinc-600"><strong>Description</strong> : {description}</p>

            </div>
        </div>
    );
};

export default Toydetails;