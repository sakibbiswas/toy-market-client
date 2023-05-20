import React from 'react';
import pic from '../../assets/404_page_cover.jpg'
import useTitle from '../../components/Hooks/Usetitle';
const Error = () => {
    useTitle("Error")
    return (

        <div className='text-center items-center'>
            <img className='w-full' src={pic} alt="" />

        </div>
    );
};

export default Error;