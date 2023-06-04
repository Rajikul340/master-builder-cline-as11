import React from "react";
import { AiFillDribbbleSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

const Showecase = () => {
  return (
    <section className="mx-10 my-10">
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
        <div className="">
          <figure>
            <img
            className=" rounded-bl-full"
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
              alt="Shoes"
            />
          </figure>

        </div>
        <div className=" ">
          <figure>
            <img
            className=" rounded-"
              src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
              alt="Shoes"
            />
          </figure>

        </div>
        <div className=" ">
          <figure>
            <img
            className=" rounded-br-full"
              src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
              alt="Shoes"
            />
          </figure>

        </div>
      </div>
    </section>
  );
};

export default Showecase;
