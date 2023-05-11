import React from "react";
import banner1 from "../../../image/blog-grid-1.jpg";
import banner2 from "../../../image/banner-1.jpg";
import banner3 from "../../../image/banner-2.jpg";
import "../Style/Style.css";

const Banner = () => {
  return (
    <div >
      <div className="carousel w-full" style={{height:"600px"}}>
        <div id="slide1" className="carousel-item relative w-full">
          <div className="carousel-img">
            <img src={banner3} className="" alt="banner" style={{height:"600px"}} />
          </div>
          <div className="absolute transform -translate-y-1/2 left-24 top-2/4">
            <h1 className="lg:text-6xl text-2xl font-bold uppercase text-white lg:mb-3">
              best quality <br /> for construction
            </h1>
            <p className="text-white lg:text-xl my-4">
              Quality engineering is a discipline of engineering. <br /> It is
              concerned with the practice and principles of product <br /> and
              service quality assurance and control
            </p>
            <button className="btn btn-outline   btn-info">Learn More</button>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="carousel-img">
            <img src={banner2} className="w-" alt="banner-img" style={{height:"600px"}}  />
          </div>
          <div className="absolute transform -translate-y-1/2 left-24 top-2/4">
            <h1 className="lg:text-6xl text-3xl font-bold uppercase text-white mb-3">
              best quality <br /> for construction
            </h1>
            <p className="text-white lg:text-xl my-4">
              Quality engineering is a discipline of engineering. <br /> It is
              concerned with the practice and principles of product <br /> and
              service quality assurance and control
            </p>
            <button className="btn btn-outline   btn-info">Learn More</button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="carousel-img">
            <img src={banner1} className="w-" alt="banner-img" style={{height:"600px"}} />
          </div>
          <div className="absolute transform -translate-y-1/2 left-24 top-2/4">
            <h1 className="lg:text-6xl text-3xl font-bold uppercase text-white mb-3">
              best quality <br /> for construction
            </h1>
            <p className="text-white lg:text-xl my-4">
              Quality engineering is a discipline of engineering. <br /> It is
              concerned with the practice and principles of product <br /> and
              service quality assurance and control
            </p>
            <button className="btn btn-outline   btn-info">Learn More</button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
