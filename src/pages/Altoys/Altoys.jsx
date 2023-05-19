import React, { useEffect, useState } from 'react';
import Altoydetail from '../altoydetails/Altoydetail';

const Altoys = () => {
    const [toys, settoys] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4000/toys`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },

        })
            .then(res => res.json())
            .then(data => settoys(data))
    }, [])
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>Seller-Name</th>
                            <th>Image</th>
                            <th>Products name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>SUB-Products</th>
                            <th>Details</th>
                        </tr>


                    </thead>
                    <tbody>

                        {
                            toys.map(toy => <Altoydetail
                                key={toy._id}
                                toy={toy}></Altoydetail>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Altoys;