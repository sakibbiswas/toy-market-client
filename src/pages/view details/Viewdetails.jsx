import React from 'react';
import p1 from '../../assets/1334972-teddy-bear.webp'
const Viewdetails = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-200 shadow-xl">
                <figure><img className='rounded-2xl' src={p1} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="text-xl font-semibold"> Name : Dog</h2>
                    <p className='text-xl font-semibold'> Likes : <span>44</span>  </p>
                    <p className='text-xl font-semibold'> Price : <span>$ 1800</span> </p>
                    <p className='text-xl font-semibold' > Details: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, odio accusantium nesciunt, alias numquam nobis, laboriosam labore a et quibusdam voluptates dicta excepturi. Veniam explicabo corrupti suscipit cupiditate sequi quas.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Viewdetails;
