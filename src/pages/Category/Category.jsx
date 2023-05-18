import React, { useEffect, useState } from 'react';
import Tabs from '../TABS/Tabse';

const Category = () => {
    const [toys, settoys] = useState([])
    useEffect(() => {
        fetch('Toys.json')
            .then(res => res.json())
            .then(data => settoys(data))
    }, [])
    return (

        <div className='text-center '>
            <h1 className='text-center text-3xl text-red-600 font-bold mb-6'>Shop By Category</h1>
            <div>
                <p>toys : {toys.length}</p>
                {
                    toys.map(toy => toy.filter(Toy => Toy.id !== id))
                }
            </div>
        </div>

    );
};

export default Category;
