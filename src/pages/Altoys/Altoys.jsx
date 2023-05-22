import React, { useContext, useEffect, useState } from 'react';
import Altoydetail from '../altoydetails/Altoydetail';
import { Authcontext } from '../../provider/Authprovider';
import useTitle from '../../components/Hooks/Usetitle';

const Altoys = () => {
    useTitle('ALLtoys')
    const [Toys, Settoys] = useState([])
    const { user } = useContext(Authcontext)
    const [searchText, setsearchText] = useState('')
    const [asc, setase] = useState(true)
    useEffect(() => {
        fetch(`https://toy-marketplace-server-ruby.vercel.app/toys?sort=${asc ? 'asc' : 'dsc'}`)
            .then(res => res.json())
            .then(data => Settoys(data))
    }, [asc])

    const handelsearch = () => {
        fetch(`https://toy-marketplace-server-ruby.vercel.app/searchByTitle/${searchText}`)

            .then(res => res.json())
            .then(data => Settoys(data))
    }

    return (
        <div>
            <div className='text-center mb-8'
                data-aos="zoom-in-down" data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <h2 className='text-center mb-5 font-bold text-4xl'>All My Toys</h2>
                <div className='flex items-center justify-center gap-4 mb-7'>

                    <input onChange={(e) => setsearchText(e.target.value)} type="text" placeholder="Type here" className="input text-center input-bordered w-60 bg-slate-100" />{""}
                    <button onClick={handelsearch} className="btn btn-info">Search</button>
                </div>

                <button className="btn btn-info"
                    onClick={() => setase(!asc)}
                >{asc ? 'price high to low' : "price low to high"}</button>

            </div>
            <div className="overflow-x-auto lg: w-full" data-aos="zoom-in-down" data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
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