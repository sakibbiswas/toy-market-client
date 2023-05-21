import React from 'react';
import tadi1 from '../../assets/lovely-soft-teddy-bears-header.jpg-nggid041634-ngg0dyn-1280x720x100-00f0w010c010r110f110r010t010.jpg'
import tadi2 from '../../assets/Website-Banner_Talking-MB_1920x750px.webp'
import tadi3 from '../../assets/valentine-s-day-cute-teddy-bears-with-the-hearts-wallpaper-2048x1152_49.jpg'
import tadi4 from '../../assets/aboutbanner.webp'



const Banner = () => {
    return (
        <div className='container lg:mx-auto' >
            <div className="carousel w-full " style={{ height: '550px' }}>
                <div id="item1" className="carousel-item relative w-full">
                    <img src={tadi4} className="w-full" />

                </div>
                <div id="item2" className="carousel-item relative w-full">
                    <img src={tadi2} className="w-full" />

                </div>
                <div id="item3" className="carousel-item relative w-full">
                    <img src={tadi3} className="w-full" />
                    <div className="absolute text-center h-full pl-20    items-center top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  
   ">
                        <div className='text-white   space-y-7 mt-28  '>
                            <h2 className='text-6xl text-white font-bold '><span className='text-7xl text-orange-500'>Pick </span> The Best  <br /> Toy For Your Kid  </h2>



                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item relative w-full">
                    <img src={tadi1} className="w-full" />
                    <div className="absolute text-center h-full pl-20    items-center top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  
   ">
                        <div className='text-white   space-y-7 mt-28  '>
                            <h2 className='text-6xl text-white font-bold '><span className='text-7xl text-orange-500'>Pick </span> The Best  <br /> Toy For Your Kid  </h2>



                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>




    );
};

export default Banner;