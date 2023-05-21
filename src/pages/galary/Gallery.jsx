import React from 'react';
import g5 from '../../assets/g1.webp'
import g1 from '../../assets/g2.jpg'
import g4 from '../../assets/g3.webp'
import g3 from '../../assets/g4.jfif'
import g8 from '../../assets/g5.avif'
import g6 from '../../assets/360_F_499052648_XLS1AmB8zmIgct9faK3Y7hddCpug9omy.webp'
import g7 from '../../assets/11709_legler_small_foot_huepfpferd_braun_b.jpg'
import g9 from '../../assets/download.jfif'
import g2 from '../../assets/unicorn.jpg'

const Gallery = () => {
    return (
        <div className='mb-8 bg-slate-300 ' >
            <h4 className='text-center mt-6 mb-5 font-bold text-red-600 text-3xl'>Best Products</h4>
            <div className='grid lg:grid-cols-3 gap-6' data-aos="fade-up" data-aos-duration="3000">

                <div className="">
                    <img src={g1} style={{ height: '600px', width: '500px' }} alt="" />
                    <h2 className='text-center text-xl font-semibold text-orange-500'>Baby toys</h2>
                    <h2 className='text-center text-xl font-semibold text-orange-500'>Price : $ 1000</h2>
                </div>
                <div className="">
                    <img src={g2} alt="" style={{ height: '600px', width: '500px' }} />
                    <h2 className='text-center text-xl font-semibold text-orange-500'>Key toys</h2>
                    <h2 className='text-center text-xl font-semibold text-orange-500'>Price : $ 1600</h2>
                </div>
                <div className="">
                    <img src={g3} alt="" style={{ height: '600px', width: '500px' }} />
                    <h2 className='text-center text-xl font-semibold text-orange-500'>Gift toys</h2>
                    <h2 className='text-center text-xl font-semibold text-orange-500'>Price : $ 1300</h2>
                </div>
                <div className="">
                    <img src={g4} alt="" style={{ height: '600px', width: '500px' }} />
                    <h2 className='text-center text-xl font-semibold text-orange-500'>Play toys</h2>
                    <h2 className='text-center text-xl font-semibold text-orange-500'>Price : $ 1500</h2>
                </div>
                <div className="">
                    <img src={g5} alt="" style={{ height: '600px', width: '500px' }} />
                    <h2 className='text-center text-xl font-semibold text-orange-500'>Soft toys</h2>
                    <h2 className='text-center text-xl font-semibold text-orange-500'>Price : $ 1300</h2>
                </div>
                <div className="">
                    <img src={g6} alt="" style={{ height: '600px', width: '500px' }} />
                    <h2 className='text-center text-xl font-semibold text-orange-500'>Lite birite</h2>
                    <h2 className='text-center text-xl font-semibold text-orange-500'>Price : $ 1100</h2>
                </div>
                <div className="">
                    <img src={g7} alt="" style={{ height: '600px', width: '500px' }} />
                    <h2 className='text-center text-xl font-semibold text-orange-500'>Horse tady</h2>
                    <h2 className='text-center text-xl font-semibold text-orange-500'>Price : $ 1200</h2>
                </div>
                <div className="">
                    <img src={g8} alt="" style={{ height: '600px', width: '500px' }} />
                    <h2 className='text-center text-xl font-semibold text-orange-500'>Smart tady </h2>
                    <h2 className='text-center text-xl font-semibold text-orange-500'>Price : $ 1600</h2>
                </div>
                <div className="">
                    <img src={g9} alt="" style={{ height: '600px', width: '500px' }} />
                    <h2 className='text-center text-xl font-semibold text-orange-500'>Dinosour tady</h2>
                    <h2 className='text-center text-xl font-semibold text-orange-500'>Price : $ 1900</h2>
                </div>

            </div>
        </div>
    );
};

export default Gallery;