import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Mytoysdetals from './Mytoysdetail/Mytoysdetals';

const Mytoys = () => {
    const Toys = useLoaderData()
    const [Toy, setToy] = useState(Toys)

    return (
        <div >
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>Remove</th>
                            <th>Image</th>
                            <th>Product name</th>

                            <th>email</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Seller</th>
                            <th>update</th>
                        </tr>


                    </thead>
                    <tbody>

                        {
                            Toy.map(toy => <Mytoysdetals
                                key={toy._id}
                                toy={toy}
                                Toy={Toy}
                                setToy={setToy}></Mytoysdetals>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Mytoys;
