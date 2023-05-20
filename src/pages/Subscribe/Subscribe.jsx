import React from 'react';
import s1 from '../../assets/sel.jpg'


const Subscribe = () => {
    return (
        <div className="   mt-10">

            <div className='grid lg:grid-cols-2 gap-5 items-center' data-aos="zoom-in-down" data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <img style={{ width: '400px', height: '300px' }} className='lg:ml-6 ' src={s1} alt="" />
                <div>
                    <h2 className='text-4xl font-bold text-sky-500'>Subscribe our Shop page</h2>
                    <p className='font-bold text-gray-700 w-1/2 mt-4 mb-4'>Want to get spacial offer before they run out.So subscribe our shop Newsletter</p>
                    <div className="form-control">
                        <div className="input-group">
                            <input type="email" placeholder="email" className="input input-bordered" required />
                            <button className="btn btn-info">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Subscribe;