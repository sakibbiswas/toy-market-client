import React from 'react';
import i1 from '../../assets/i1.jpg'
import i2 from '../../assets/best-beginner-camera-for-instagram-photography.webp'
import i3 from '../../assets/ii2.jpg'
const Other = () => {
    return (
        <div className="mt-5 mb-5">
            <h2 className='text-center font-bold text-red-500 text-3xl mb-5'>Follows Us Our Instragram</h2>
            <div className='grid lg:grid-cols-3 gap-8 '>
                <div data-aos="flip-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" >
                    <img style={{ width: '500px', height: '400px' }} src={i1} alt="" />

                </div>

                <div data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" >
                    <img style={{ width: '500px', height: '400px' }} src={i2} alt="" />

                </div>
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" >
                    <img style={{ width: '500px', height: '400px' }} src={i3} alt="" />

                </div>


            </div>

        </div>
    );
};

export default Other;