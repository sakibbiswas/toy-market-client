import React from 'react';
import g1 from '../../assets/g1.webp'
import g2 from '../../assets/g2.jpg'
import g3 from '../../assets/g3.webp'
import g4 from '../../assets/g4.jfif'
import g5 from '../../assets/g5.avif'
import g6 from '../../assets/tadi1.jpg'

const Gallery = () => {
    return (
        <div >
            <h4 className='text-center mt-6 mb-5 font-bold text-red-600 text-3xl'>Best Products</h4>
            <div className='grid lg:grid-cols-3 gap-6'>

                <div className="">
                    <img src={g1} style={{ height: '600px' }} alt="" />
                    <h2 className='text-center text-xl font-semibold text-orange-500'>Baby toys</h2>
                </div>
                <div className="">
                    <img src={g2} alt="" style={{ height: '600px' }} />
                    <h2 className='text-center text-xl font-semibold text-orange-500'>Key toys</h2>
                </div>
                <div className="">
                    <img src={g3} alt="" style={{ height: '600px' }} />
                    <h2 className='text-center text-xl font-semibold text-orange-500'>Gift toys</h2>
                </div>
                <div className="">
                    <img src={g4} alt="" style={{ height: '600px' }} />
                    <h2 className='text-center text-xl font-semibold text-orange-500'>Play toys</h2>
                </div>
                <div className="">
                    <img src={g5} alt="" style={{ height: '600px' }} />
                    <h2 className='text-center text-xl font-semibold text-orange-500'>Soft toys</h2>
                </div>
                <div className="">
                    <img src={g6} alt="" style={{ height: '600px' }} />
                    <h2 className='text-center text-xl font-semibold text-orange-500'>Lite birite</h2>
                </div>

            </div>
        </div>
    );
};

export default Gallery;