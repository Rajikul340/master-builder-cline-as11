import React, { useRef } from "react";
import { AiFillDribbbleSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const Showecase = () => {
  const animationVariants = {
    visible: {
      opacity: 1,
      scale: 1,
    },
    hidden: {
      opacity: 0,
      scale: 0,
    },
  };

  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
    
    className="mx-10 my-10">
      <div className="flex justify-between">
        <h1 className="uppercase text-[#3ABFF8]  flex items-center font-bold md:text-4xl text-2xl">
          <span>
            <AiFillDribbbleSquare size={32} />
          </span>
          <span> Some of our project</span>
        </h1>
        <Link to="/" className="md:text-2xl text-xl uppercase">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-3 my-10">
        <div
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}
        >
          <img
            className=" rounded-bl-[50px]"
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
            alt="Shoes"
          />
        </div>
        <div
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}
        >
         
        
          <img
            className=" rounded-"
            src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
            alt="Shoes"
          />
        </div>
        <div
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}
        >
          <img
            className=" rounded-tr-[50px]"
            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
            alt="Shoes"
          />
        </div>
      </div>
    </section>
  );
};

export default Showecase;
