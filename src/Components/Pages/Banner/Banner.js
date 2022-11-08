import React from 'react';
import banner1 from '../../../image/blog-grid-1.jpg';
import banner2 from '../../../image/banner-1.jpg';
import banner3 from '../../../image/banner-2.jpg';
import '../Style/Style.css'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full">
                    <div className='carousel-img'>
                    <img src={banner3} className="w-" />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-6xl font-bold uppercase text-white'>
                     best quality <br /> for construction
                    </h1>
                    <p></p>
                    <button className='btn btn-outline '>Learn More</button>
                </div>
                  
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;