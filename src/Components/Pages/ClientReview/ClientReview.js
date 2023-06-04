import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiFillDribbbleSquare, AiFillStar } from "react-icons/ai";




export default function ReviewSlider() {
  return (
    <div className="my-10">
        <h1 className="uppercase text-[#3ABFF8]  flex items-center  my-5 font-bold md:text-4xl text-2xl mx-5">
          <span>
            <AiFillDribbbleSquare size={32} />
          </span>
          <span> What client says</span>
        </h1>
     
      <Swiper 
       slidesPerView={1} // Default value for large devices
       breakpoints={{
         // Set breakpoints for different device sizes
         640: {
           slidesPerView: 3, // Value for small devices
         },
       }}
      className="mySwiper">
      
      <SwiperSlide>
          <div id="cardHover" className="flex items-center   transition shadow-2xl p-5 m-5 rounded-lg">
            <div className="w-2/12">
              <img
                src="https://attitudematterz.com/wp-content/uploads/2022/07/Saema-Firdous.png"
                alt="img"
                className="w-16 h-14 rounded-full"
              />
            </div>
            <div className="w-10/12 hoverIcon">
              <ul className="flex ">
                <li>
           
                  <AiFillStar />
                </li>
                <li>
                  {" "}
                  <AiFillStar />
                </li>
                <li>
                  {" "}
                  <AiFillStar />
                </li>
                <li>
                  <AiFillStar  />
                </li>
                <li>
                  <AiFillStar />
                </li>
              </ul>
              <p className="review">
                i have been mentoring students on choosing the right career
                since 8 years now. but the style of working at attitutd matteZ
                is a lot different than other companies. i enjoy freedom to
                strategize, plan and implement the ideas for my category and
                develop a comperhensive plan which impacts the life of thousands
              </p>
              <div className="flex justify-between">
                <div >
                  <h3 className="md:text-xl text-lg font-bold name">
                    Saema Firdous
                  </h3>
                  <h4 className="text-[#3ABFF8]  font-bold name">
                    Category Manager- Career Guidance
                  </h4>
                </div>
                <img
                  className="w-16  "
                  alt=""
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvZsPdALu0srzFWFB9EB6B_-f_WovYfx3sb1GJEfOhZN9nVEG7"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      <SwiperSlide>
          <div id="cardHover" className="flex items-center   transition shadow-2xl p-5 m-5 rounded-lg">
            <div className="w-2/12">
              <img
                src="https://attitudematterz.com/wp-content/uploads/2022/07/Saema-Firdous.png"
                alt="img"
                className="w-16 h-14 rounded-full"
              />
            </div>
            <div className="w-10/12 hoverIcon">
              <ul className="flex ">
                <li>
           
                  <AiFillStar />
                </li>
                <li>
                  {" "}
                  <AiFillStar />
                </li>
                <li>
                  {" "}
                  <AiFillStar />
                </li>
                <li>
                  <AiFillStar  />
                </li>
                <li>
                  <AiFillStar />
                </li>
              </ul>
              <p className="review">
                i have been mentoring students on choosing the right career
                since 8 years now. but the style of working at attitutd matteZ
                is a lot different than other companies. i enjoy freedom to
                strategize, plan and implement the ideas for my category and
                develop a comperhensive plan which impacts the life of thousands
              </p>
              <div className="flex justify-between">
                <div >
                  <h3 className="md:text-xl text-lg font-bold name">
                    Saema Firdous
                  </h3>
                  <h4 className="text-[#3ABFF8]  font-bold name">
                    Category Manager- Career Guidance
                  </h4>
                </div>
                <img
                  className="w-16  "
                  alt=""
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvZsPdALu0srzFWFB9EB6B_-f_WovYfx3sb1GJEfOhZN9nVEG7"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      <SwiperSlide>
          <div id="cardHover" className="flex items-center   transition shadow-2xl p-5 m-5 rounded-lg">
            <div className="w-2/12">
              <img
                src="https://attitudematterz.com/wp-content/uploads/2022/07/Saema-Firdous.png"
                alt="img"
                className="w-16 h-14 rounded-full"
              />
            </div>
            <div className="w-10/12 hoverIcon">
              <ul className="flex ">
                <li>
           
                  <AiFillStar />
                </li>
                <li>
                  {" "}
                  <AiFillStar />
                </li>
                <li>
                  {" "}
                  <AiFillStar />
                </li>
                <li>
                  <AiFillStar  />
                </li>
                <li>
                  <AiFillStar />
                </li>
              </ul>
              <p className="review">
                i have been mentoring students on choosing the right career
                since 8 years now. but the style of working at attitutd matteZ
                is a lot different than other companies. i enjoy freedom to
                strategize, plan and implement the ideas for my category and
                develop a comperhensive plan which impacts the life of thousands
              </p>
              <div className="flex justify-between">
                <div >
                  <h3 className="md:text-xl text-lg font-bold name">
                    Saema Firdous
                  </h3>
                  <h4 className="text-[#3ABFF8]  font-bold name">
                    Category Manager- Career Guidance
                  </h4>
                </div>
                <img
                  className="w-16  "
                  alt=""
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvZsPdALu0srzFWFB9EB6B_-f_WovYfx3sb1GJEfOhZN9nVEG7"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      <SwiperSlide>
          <div id="cardHover" className="flex items-center   transition shadow-2xl p-5 m-5 rounded-lg">
            <div className="w-2/12">
              <img
                src="https://attitudematterz.com/wp-content/uploads/2022/07/Saema-Firdous.png"
                alt="img"
                className="w-16 h-14 rounded-full"
              />
            </div>
            <div className="w-10/12 hoverIcon">
              <ul className="flex ">
                <li>
           
                  <AiFillStar />
                </li>
                <li>
                  {" "}
                  <AiFillStar />
                </li>
                <li>
                  {" "}
                  <AiFillStar />
                </li>
                <li>
                  <AiFillStar  />
                </li>
                <li>
                  <AiFillStar />
                </li>
              </ul>
              <p className="review">
                i have been mentoring students on choosing the right career
                since 8 years now. but the style of working at attitutd matteZ
                is a lot different than other companies. i enjoy freedom to
                strategize, plan and implement the ideas for my category and
                develop a comperhensive plan which impacts the life of thousands
              </p>
              <div className="flex justify-between">
                <div >
                  <h3 className="md:text-xl text-lg font-bold name">
                    Saema Firdous
                  </h3>
                  <h4 className="text-[#3ABFF8]  font-bold name">
                    Category Manager- Career Guidance
                  </h4>
                </div>
                <img
                  className="w-16  "
                  alt=""
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvZsPdALu0srzFWFB9EB6B_-f_WovYfx3sb1GJEfOhZN9nVEG7"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      <SwiperSlide>
          <div id="cardHover" className="flex items-center   transition shadow-2xl p-5 m-5 rounded-lg">
            <div className="w-2/12">
              <img
                src="https://attitudematterz.com/wp-content/uploads/2022/07/Saema-Firdous.png"
                alt="img"
                className="w-16 h-14 rounded-full"
              />
            </div>
            <div className="w-10/12 hoverIcon">
              <ul className="flex ">
                <li>
           
                  <AiFillStar />
                </li>
                <li>
                  {" "}
                  <AiFillStar />
                </li>
                <li>
                  {" "}
                  <AiFillStar />
                </li>
                <li>
                  <AiFillStar  />
                </li>
                <li>
                  <AiFillStar />
                </li>
              </ul>
              <p className="review">
                i have been mentoring students on choosing the right career
                since 8 years now. but the style of working at attitutd matteZ
                is a lot different than other companies. i enjoy freedom to
                strategize, plan and implement the ideas for my category and
                develop a comperhensive plan which impacts the life of thousands
              </p>
              <div className="flex justify-between">
                <div >
                  <h3 className="md:text-xl text-lg font-bold name">
                    Saema Firdous
                  </h3>
                  <h4 className="text-[#3ABFF8]  font-bold name">
                    Category Manager- Career Guidance
                  </h4>
                </div>
                <img
                  className="w-16  "
                  alt=""
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvZsPdALu0srzFWFB9EB6B_-f_WovYfx3sb1GJEfOhZN9nVEG7"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
     
     
   
     
      </Swiper>
    </div>
  );
}
