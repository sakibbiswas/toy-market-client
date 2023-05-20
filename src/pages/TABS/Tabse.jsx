
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';

import p4 from '../../assets/h1.jfif'
import p5 from '../../assets/h2.jpg'
import p6 from '../../assets/d1.jfif'
import p7 from '../../assets/d2.webp'
import p8 from '../../assets/b1.jpg'
import p9 from '../../assets/b2.jpg'
import Swal from 'sweetalert2'



import '@smastrom/react-rating/style.css'
import { useContext } from 'react';
import { Authcontext } from '../../provider/Authprovider';

const Tabse = () => {
    const { user } = useContext(Authcontext)
    const notify = () => {


        if (!user) {


            Swal.fire({
                title: 'You have to log in first to view details',
                showDenyButton: true,
                confirmButtonText: 'Yes',

            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire('Saved!', '', 'success')
                }

            })
        }

    }

    return (
        <div className='text-center '>

            <h1 className='text-center text-3xl text-red-600 font-bold mb-6'>Shop By Category</h1>

            <Tabs className='bg-slate-100 pb-8'>
                <TabList className='bg-slate-300' >
                    <Tab  >
                        <span className='text-stone-700 font-bold'> Horse</span>
                    </Tab>
                    <Tab>
                        <span className='text-stone-700 font-bold'> Dinosaur</span>

                    </Tab>
                    <Tab>
                        <span className='text-stone-700 font-bold'>  Unicorn</span>

                    </Tab>
                </TabList>

                <TabPanel>
                    <div className='flex justify-center gap-5 mt-8'>
                        <div className="card lg:card-side bg-slate-300 shadow-xl">
                            <figure><img src={p4} className='rounded-2xl p-2' style={{ height: '200px', width: "250px" }} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-semibold">Name : Horse</h2>
                                <p className='text-xl font-semibold'>Likes : <span>33</span>  </p>
                                <p className='text-xl font-semibold'>Price : <span>$ 1200</span> </p>
                                <p className='text-xl font-semibold'>Rating : 4.6</p>
                                <div className="card-actions justify-end">
                                    <Link to='/details'>
                                        <button onClick={notify} className="btn btn-primary">View details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card lg:card-side bg-slate-300  shadow-xl">
                            <figure><img src={p5} className='rounded-2xl p-2' style={{ height: '200px', width: "250px" }} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-semibold">Name : Horse</h2>
                                <p className='text-xl font-semibold'>Likes : <span>43</span>  </p>
                                <p className='text-xl font-semibold'>Price : <span>$ 1100</span> </p>
                                <p className='text-xl font-semibold'>Rating : 4.4</p>
                                <div className="card-actions justify-end">
                                    <Link to='/details'>
                                        <button onClick={notify} className="btn btn-primary">View details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>



                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex justify-center gap-5 mt-8'>
                        <div className="card lg:card-side bg-slate-300  shadow-xl">
                            <figure><img src={p6} className='rounded-2xl p-2' style={{ height: '200px', width: "250px" }} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-semibold">Name : Dinasor</h2>
                                <p className='text-xl font-semibold'>Likes : <span>44</span>  </p>
                                <p className='text-xl font-semibold'>Price : <span>$ 1300</span> </p>
                                <p className='text-xl font-semibold'>Rating : 4.3</p>
                                <div className="card-actions justify-end">
                                    <Link to='/details'>
                                        <button onClick={notify} className="btn btn-primary">View details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card lg:card-side bg-slate-300  shadow-xl">
                            <figure><img src={p7} className='rounded-2xl p-2' style={{ height: '200px', width: "250px" }} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-semibold">Name : Dinasor</h2>
                                <p className='text-xl font-semibold'>Likes : <span>44</span>  </p>
                                <p className='text-xl font-semibold'>Price : <span>$ 1300</span> </p>
                                <p className='text-xl font-semibold'>Rating : 4.2</p>
                                <div className="card-actions justify-end">
                                    <Link to='/details'>
                                        <button onClick={notify} className="btn btn-primary">View details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>



                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex justify-center gap-5 mt-8'>
                        <div className="card lg:card-side bg-slate-300  shadow-xl">
                            <figure><img src={p8} className='rounded-2xl p-2' style={{ height: '200px', width: "250px" }} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-semibold">Name : unicorn</h2>
                                <p className='text-xl font-semibold'>Likes : <span>80</span>  </p>
                                <p className='text-xl font-semibold'>Price : <span>$ 1700</span> </p>
                                <p className='text-xl font-semibold'>Rating : 4.4</p>
                                <div className="card-actions justify-end">
                                    <Link to='/details'>
                                        <button onClick={notify} className="btn btn-primary">View details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card lg:card-side bg-slate-300  shadow-xl">
                            <figure><img src={p9} className='rounded-2xl p-2' style={{ height: '200px', width: "250px" }} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-semibold">Name : unicorn</h2>
                                <p className='text-xl font-semibold'>Likes : <span>78</span>  </p>
                                <p className='text-xl font-semibold'>Price : <span>$ 1200</span> </p>
                                <p className='text-xl font-semibold'>Rating : 4.2</p>
                                <div className="card-actions justify-end">
                                    <Link to='/details'>
                                        <button onClick={notify} className="btn btn-primary">View details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>



                    </div>
                </TabPanel>










            </Tabs>
        </div>
    );
};

export default Tabse;
