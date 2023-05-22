import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Mytoysdetals from './Mytoysdetail/Mytoysdetals';
import { Authcontext } from '../provider/Authprovider';
import useTitle from '../components/Hooks/Usetitle';

const Mytoys = () => {
    useTitle('MYToys')
    const [sortvalue, Setsortvalue] = useState("")
    const { user } = useContext(Authcontext)
    // const Toys = useLoaderData()
    // const [Toy, setToy] = useState(Toys)
    const [Toy, setToy] = useState([])
    const url = `https://toy-marketplace-server-ruby.vercel.app/toy?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setToy(data);
            })
    }, [])



    return (
        <div className=''>
            <div className="form-control">
                <div className="input-group mb-5">
                    <select className="select select-bordered">
                        <option disabled selected>sort</option>
                        <option>price</option>
                        <option></option>
                    </select>

                </div>
            </div>

            <div className="overflow-x-auto lg: w-full ">
                <table className="table w-full ">
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
                    <tbody >

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
