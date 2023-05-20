import React, { useContext, useEffect, useState } from 'react';
import Altoydetail from '../altoydetails/Altoydetail';
import { Authcontext } from '../../provider/Authprovider';
import useTitle from '../../components/Hooks/Usetitle';

const Altoys = () => {
    useTitle('ALLtoys')
    const [Toys, Settoys] = useState([])
    const { user } = useContext(Authcontext)
    const [searchText, setsearchText] = useState("")
    useEffect(() => {
        fetch(`http://localhost:4000/toys`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },

        })
            .then(res => res.json())
            .then(data => Settoys(data))
    }, [])

    const handelsearch = () => {
        fetch(`http://localhost:4000/searchByTitle/${searchText}`)

            .then(res => res.json())
            .then(data => Settoys(data))
    }

    return (
        <div>
            <div className='text-center mb-8'>
                <h2 className='text-center mb-5 font-bold text-4xl'>All My Toys</h2>
                <div className='flex items-center justify-center gap-4'>

                    <input onChange={(e) => setsearchText(e.target.value)} type="text" placeholder="Type here" className="input text-center input-bordered w-60 bg-slate-100" />{""}
                    <button onClick={handelsearch} className="btn btn-info">Search</button>
                </div>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>Seller</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>

                            <th>Details</th>
                        </tr>


                    </thead>
                    <tbody>

                        {
                            Toys.map(Toy => <Altoydetail
                                key={Toy._id}
                                Toy={Toy}></Altoydetail>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Altoys;