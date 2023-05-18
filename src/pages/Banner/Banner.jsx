import React from 'react';
import tadi1 from '../../assets/-teddy-bear3.webp'
import tadi2 from '../../assets/tadi1.jpg'
import tadi3 from '../../assets/tady2.webp'
import tadi4 from '../../assets/1334972-teddy-bear.webp'



const Banner = () => {
    return (
        <div>
            <div className="carousel w-full " style={{ height: '450px' }}>
                <div id="item1" className="carousel-item w-full">
                    <img src={tadi1} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={tadi2} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={tadi3} className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={tadi4} className="w-full" />
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