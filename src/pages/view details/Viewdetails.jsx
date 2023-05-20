import React from 'react';
import p4 from '../../assets/h1.jfif'
const Viewdetails = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-200 shadow-xl">
                <figure><img className='rounded-2xl' src={p4} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="text-xl font-semibold"> Name : Horse</h2>
                    <p className='text-xl font-semibold'> Likes : <span>48</span>  </p>
                    <p className='text-xl font-semibold'> Price : <span>$ 1300</span> </p>
                    <p className='text-xl font-semibold' > Details: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, odio accusantium nesciunt, alias numquam nobis, laboriosam labore a et quibusdam voluptates dicta excepturi. Veniam explicabo corrupti suscipit cupiditate sequi quas.</p>
                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Viewdetails;
