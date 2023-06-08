
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { AiFillDribbbleSquare } from "react-icons/ai";




const WhyChose = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  return (
    <section
    ref={ref}
  style={{
    transform: isInView ? "none" : "translateX(-200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
  }}
    
    className="mx-10 my-10">
      <h1  className="uppercase flex text-[#3ABFF8]  items-center font-bold md:text-4xl text-2xl">
        <span>
          <AiFillDribbbleSquare size={32} />
        </span>
        <span> why choose us</span>
      </h1>
      <div className="my-10 ">
        <div className="md:flex">
          <div className="border-r-[1px] border-b-[1px] md:w-1/2 ">
            <div className="flex items-center gap-4">
              <span className="text-[#ddd] text-3xl ">01.</span>
              <h2 className="md:text-3xl md:px-5 font-bold text-xl">
                The Best Price
              </h2>
            </div>
            <p className="md:px-20 md:py-10">
              A project is an activiry to meet the creation of a unique product
              of service and thus activities that are under taken to accomodate
              outline
            </p>
          </div>
          <div className=" border-b-[1px] md:w-1/2 ">
            <div className="flex items-center gap-4">
              <span className="text-[#ddd] text-3xl pl-2">02.</span>
              <h2 className="md:text-3xl md:px-2 font-bold text-xl">
                Daily Consultant
              </h2>
            </div>
            <p className="md:px-20 md:py-10">
              one of the most common competency based on questions for any
              sequiring some project that make client for easy consulting about
              the property
            </p>
          </div>
        </div>
        <div className="md:flex">
          <div className="border-r-[1px]  md:w-1/2 ">
            <div className="flex items-center gap-4">
              <span className="text-[#ddd] text-3xl">03.</span>
              <h2 className="md:text-3xl md:px-5 my-5 font-bold text-xl">
                Custom Design
              </h2>
            </div>
            <p className="md:px-20 md:py-10">
              A project is defined as a sequence of taskes that must be
              completed to ttain a certain outcome . Accoirding to the project
              with custome design
            </p>
          </div>
          <div className="  md:w-1/2 ">
            <div className="flex items-center gap-4">
              <span className="text-[#ddd] text-3xl px-3">04.</span>
              <h2 className="md:text-3xl md:px-2 my-4 font-bold text-xl">
                Premium Quality
              </h2>
            </div>
            <p className="md:px-20 md:py-10">
              Make sure that all we use is premium quality and taking no longer
              than deadines. this will get the ball roiling and improve your
              confidence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChose;
