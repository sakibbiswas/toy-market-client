import React from 'react';
import { Outlet } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='md:container md:mx-auto p-8'>
            <Outlet></Outlet>
        </div>
    );
};

export default ErrorPage;