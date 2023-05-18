import React from 'react';
import tadi1 from '../../assets/-teddy-bear3.webp'
import tadi2 from '../../assets/tadi1.jpg'
import tadi3 from '../../assets/tady2.webp'
import tadi4 from '../../assets/1334972-teddy-bear.webp'



const Banner = () => {
    return (
        <div>
            <div className="carousel w-full" style={{ height: '550px' }}>
                <div id="item1" className="carousel-item relative w-full">
                    <img src={tadi4} className="w-full" />
                    <div className="absolute text-center h-full pl-72    items-center top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  
   ">
                        <div className='text-white   space-y-7 mt-36  '>
                            <h2 className='text-6xl text-white font-bold '>Pick The Best  <br /> Toy For Your Kid  </h2>
                            <h2 className='' >Lorem ipsum dolor sit amet, consectetur  praesentium quaerat pariatur temporibus, provident ratione veritatis.</h2>
                            <div className=''>

                                <button className="btn btn-secondary rounded-xl"> Read More </button>
                            </div>

                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item relative w-full">
                    <img src={tadi2} className="w-full" />
                    <div className="absolute text-center h-full pl-72    items-center top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  
   ">
                        <div className='text-white   space-y-7 mt-28  '>
                            <h2 className='text-6xl text-white font-bold '>Pick The Best  <br /> Toy For Your Kid  </h2>
                            <h2 className='' >Lorem ipsum dolor sit amet, consectetur  praesentium quaerat pariatur temporibus, provident ratione veritatis.</h2>
                            <div className=''>

                                <button className="btn btn-secondary rounded-xl"> Read More </button>
                            </div>

                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item relative w-full">
                    <img src={tadi3} className="w-full" />
                    <div className="absolute text-center h-full pl-72    items-center top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  
   ">
                        <div className='text-white   space-y-7 mt-28  '>
                            <h2 className='text-6xl text-white font-bold '>Pick The Best  <br /> Toy For Your Kid  </h2>
                            <h2 className='' >Lorem ipsum dolor sit amet, consectetur  praesentium quaerat pariatur temporibus, provident ratione veritatis.</h2>
                            <div className=''>

                                <button className="btn btn-secondary rounded-xl"> Read More </button>
                            </div>

                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item relative w-full">
                    <img src={tadi1} className="w-full" />
                    <div className="absolute text-center h-full pl-72    items-center top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  
   ">
                        <div className='text-white   space-y-7 mt-28  '>
                            <h2 className='text-6xl text-white font-bold '>Pick The Best  <br /> Toy For Your Kid  </h2>
                            <h2 className='' >Lorem ipsum dolor sit amet, consectetur  praesentium quaerat pariatur temporibus, provident ratione veritatis.</h2>
                            <div className=''>

                                <button className="btn btn-secondary rounded-xl"> Read More </button>
                            </div>

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