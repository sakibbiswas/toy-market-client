
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React from 'react';
import { Link } from 'react-router-dom';
import p1 from '../../assets/1334972-teddy-bear.webp'
import p2 from '../../assets/-teddy-bear3.webp'
import p3 from '../../assets/g2.jpg'
import p4 from '../../assets/h1.jfif'
import p5 from '../../assets/h2.jpg'
import p6 from '../../assets/d1.jfif'
import p7 from '../../assets/d2.webp'
import p8 from '../../assets/b1.jpg'
import p9 from '../../assets/b2.jpg'
import p10 from '../../assets/g2.jpg'
const Tabse = () => {
    return (
        <div className='text-center '>
            <h1 className='text-center text-3xl text-red-600 font-bold mb-6'>Shop By Category</h1>
            <Tabs>
                <TabList>
                    <Tab>
                        <div className="card lg:card-side bg-slate-400 shadow-xl">
                            <figure><img src={p1} className='rounded-2xl p-2' style={{ height: '200px', width: "250px" }} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-semibold">Name : Dog</h2>
                                <p className='text-xl font-semibold'>Likes : <span>44</span>  </p>
                                <p className='text-xl font-semibold'>Price : <span>$ 1800</span> </p>
                                <p className='text-xl font-semibold'></p>
                                <div className="card-actions justify-end">
                                    <Link to='/details'>
                                        <button className="btn btn-primary">View details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab>
                        <div className="card lg:card-side bg-slate-400 shadow-xl">
                            <figure><img src={p2} className='rounded-2xl p-2' style={{ height: '200px', width: "250px" }} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-semibold">Name : Dog</h2>
                                <p className='text-xl font-semibold'>Likes : <span>55</span>  </p>
                                <p className='text-xl font-semibold'>Price : <span>$ 1300</span> </p>
                                <p className='text-xl font-semibold'></p>
                                <div className="card-actions justify-end">
                                    <Link to='/detail'>
                                        <button className="btn btn-primary">View details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab>
                        <div className="card lg:card-side bg-slate-400 shadow-xl">
                            <figure><img src={p1} className='rounded-2xl p-2' style={{ height: '200px', width: "250px" }} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-semibold">Name : Dog</h2>
                                <p className='text-xl font-semibold'>Likes : <span>45</span>  </p>
                                <p className='text-xl font-semibold'>Price : <span>$ 1500</span> </p>
                                <p className='text-xl font-semibold'></p>
                                <div className="card-actions justify-end">
                                    <Link to='/details'>
                                        <button className="btn btn-primary">View details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className='flex justify-center gap-5 mt-8'>
                        <div className="card lg:card-side bg-slate-400 shadow-xl">
                            <figure><img src={p4} className='rounded-2xl p-2' style={{ height: '200px', width: "250px" }} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-semibold">Name : Horse</h2>
                                <p className='text-xl font-semibold'>Likes : <span>33</span>  </p>
                                <p className='text-xl font-semibold'>Price : <span>$ 1200</span> </p>
                                <p className='text-xl font-semibold'></p>
                                <div className="card-actions justify-end">
                                    <Link>
                                        <button className="btn btn-primary">View details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card lg:card-side bg-slate-400 shadow-xl">
                            <figure><img src={p5} className='rounded-2xl p-2' style={{ height: '200px', width: "250px" }} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-semibold">Name : Horse</h2>
                                <p className='text-xl font-semibold'>Likes : <span>43</span>  </p>
                                <p className='text-xl font-semibold'>Price : <span>$ 1100</span> </p>
                                <p className='text-xl font-semibold'></p>
                                <div className="card-actions justify-end">
                                    <Link>
                                        <button className="btn btn-primary">View details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>



                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex justify-center gap-5 mt-8'>
                        <div className="card lg:card-side bg-slate-400 shadow-xl">
                            <figure><img src={p6} className='rounded-2xl p-2' style={{ height: '200px', width: "250px" }} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-semibold">Name : Dinasor</h2>
                                <p className='text-xl font-semibold'>Likes : <span>44</span>  </p>
                                <p className='text-xl font-semibold'>Price : <span>$ 1300</span> </p>
                                <p className='text-xl font-semibold'></p>
                                <div className="card-actions justify-end">
                                    <Link>
                                        <button className="btn btn-primary">View details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card lg:card-side bg-slate-400 shadow-xl">
                            <figure><img src={p7} className='rounded-2xl p-2' style={{ height: '200px', width: "250px" }} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-semibold">Name : Dinasor</h2>
                                <p className='text-xl font-semibold'>Likes : <span>44</span>  </p>
                                <p className='text-xl font-semibold'>Price : <span>$ 1300</span> </p>
                                <p className='text-xl font-semibold'></p>
                                <div className="card-actions justify-end">
                                    <Link>
                                        <button className="btn btn-primary">View details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>



                    </div>
                </TabPanel>  <TabPanel>
                    <div className='flex justify-center gap-5 mt-8'>
                        <div className="card lg:card-side bg-slate-400 shadow-xl">
                            <figure><img src={p8} className='rounded-2xl p-2' style={{ height: '200px', width: "250px" }} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-semibold">Name : unicorn</h2>
                                <p className='text-xl font-semibold'>Likes : <span>80</span>  </p>
                                <p className='text-xl font-semibold'>Price : <span>$ 1700</span> </p>
                                <p className='text-xl font-semibold'></p>
                                <div className="card-actions justify-end">
                                    <Link>
                                        <button className="btn btn-primary">View details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card lg:card-side bg-slate-400 shadow-xl">
                            <figure><img src={p9} className='rounded-2xl p-2' style={{ height: '200px', width: "250px" }} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-semibold">Name : unicorn</h2>
                                <p className='text-xl font-semibold'>Likes : <span>78</span>  </p>
                                <p className='text-xl font-semibold'>Price : <span>$ 1200</span> </p>
                                <p className='text-xl font-semibold'></p>
                                <div className="card-actions justify-end">
                                    <Link>
                                        <button className="btn btn-primary">View details</button>
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
