import React from 'react';
import g5 from '../../assets/amazing-teddy-bear-yellow-color-4-feet-120-5-nipiri-universe-original-imafg39bqzyq4wgw.webp'
import g1 from '../../assets/202760_1662618100.webp'
import g4 from '../../assets/p-red-colour-teddy-with-santa-cap-17852-m.webp'
import g3 from '../../assets/g4.jfif'
import g8 from '../../assets/I-love-you.jpg'
import g6 from '../../assets/360_F_499052648_XLS1AmB8zmIgct9faK3Y7hddCpug9omy.webp'
import g7 from '../../assets/horse.jpg'
import g9 from '../../assets/download.jfif'
import g2 from '../../assets/unicorn.jpg'

const Gallery = () => {
    return (
        <div className='mb-8 bg-sky-200 ' >
            <h4 className='text-center mt-6 mb-5 font-bold text-red-600 text-3xl'>Best Products</h4>
            <div className='grid lg:grid-cols-3 gap-6' data-aos="fade-up" data-aos-duration="3000">

                <div className="">
                    <img src={g1} style={{ height: '600px', width: '500px' }} alt="" />
                    <h2 className='text-center text-xl font-semibold text-red-600'>Baby toys</h2>
                    <h2 className='text-center text-xl font-semibold text-red-600'>Price : $ 1000</h2>
                </div>
                <div className="">
                    <img src={g2} alt="" style={{ height: '600px', width: '500px' }} />
                    <h2 className='text-center text-xl font-semibold text-red-600'>Unicron toys</h2>
                    <h2 className='text-center text-xl font-semibold text-red-600'>Price : $ 1600</h2>
                </div>
                <div className="">
                    <img src={g3} alt="" style={{ height: '600px', width: '500px' }} />
                    <h2 className='text-center text-xl font-semibold text-red-600'>Gift toys</h2>
                    <h2 className='text-center text-xl font-semibold text-red-600'>Price : $ 1300</h2>
                </div>
                <div className="">
                    <img src={g4} alt="" style={{ height: '600px', width: '500px' }} />
                    <h2 className='text-center text-xl font-semibold text-red-600'>Play toys</h2>
                    <h2 className='text-center text-xl font-semibold text-red-600'>Price : $ 1500</h2>
                </div>
                <div className="">
                    <img src={g5} alt="" style={{ height: '600px', width: '500px' }} />
                    <h2 className='text-center text-xl font-semibold text-red-600'>Soft toys</h2>
                    <h2 className='text-center text-xl font-semibold text-red-600'>Price : $ 1300</h2>
                </div>
                <div className="">
                    <img src={g6} alt="" style={{ height: '600px', width: '500px' }} />
                    <h2 className='text-center text-xl font-semibold text-red-600'>Lite birite</h2>
                    <h2 className='text-center text-xl font-semibold text-red-600'>Price : $ 1100</h2>
                </div>
                <div className="">
                    <img src={g7} alt="" style={{ height: '600px', width: '500px' }} />
                    <h2 className='text-center text-xl font-semibold text-red-600'>Horse tady</h2>
                    <h2 className='text-center text-xl font-semibold text-red-600'>Price : $ 1200</h2>
                </div>
                <div className="">
                    <img src={g8} alt="" style={{ height: '600px', width: '500px' }} />
                    <h2 className='text-center text-xl font-semibold text-red-600'>Smart tady </h2>
                    <h2 className='text-center text-xl font-semibold text-red-600'>Price : $ 1600</h2>
                </div>
                <div className="">
                    <img src={g9} alt="" style={{ height: '600px', width: '500px' }} />
                    <h2 className='text-center text-xl font-semibold text-red-600'>Dinosour tady</h2>
                    <h2 className='text-center text-xl font-semibold text-red-600'>Price : $ 1900</h2>
                </div>

            </div>
        </div>
    );
};

export default Gallery;