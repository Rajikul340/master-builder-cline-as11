import { useInView } from 'framer-motion';
import React, { useRef } from 'react';

const ContactForm = () => {



    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
<div
      className='flex justify-center items-center'
      ref={ref}
      style={{
        backgroundImage: 'url("https://cdn.pixabay.com/photo/2020/01/26/19/32/architecture-4795667_640.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        margin: " auto",
        height: "600px",
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}

    >

        <form className='w-11/12 bg-white h-96 p-10'>

        <input type="text" placeholder="Name" className=" p-4 border w-full max-w-xs" />
        <input type="text" placeholder="Email" className="p-4 md:mx-14 border my-5  w-full max-w-xs" />
        <input type="text" placeholder="Phone" className="p-4 border w-full max-w-xs" />
        <textarea className="textarea textarea-bordered w-full h-40" placeholder="Message"></textarea>
         
          <button className=' border px-10 uppercase font-bold bg-cyan-400 text-white py-4'>submit</button>
         
        </form>
     
    </div>
    );
};

export default ContactForm;