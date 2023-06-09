import { useInView } from "framer-motion";
import React, { useRef } from "react";

const ContactSection = () => {


  const backgroundImageUrl =
    'url("https://cdn.pixabay.com/photo/2015/06/24/14/07/interior-820107_640.jpg")';
  const gradient =
    "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0,  0, 1))";


    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

  return (
    <div
      className=" flex justify-center items-center"
      ref={ref}
      style={{
        backgroundImage: `${gradient}, ${backgroundImageUrl}`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "97%",
        margin: "50px auto",
        height: "400px",
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}

     
  

    >
       <div className=" w-9/12">
       <h1 className="md:text-4xl text-2xl my-5 text-white font-bold text-center capitalize">contact us today for a free estimation</h1>
      <p className="text-lg text-white text-center">
        take advantage of our hassle-free, no obligation estimates ! Just send
        us an email with your, name, address , number and details of your
        project including any photos, drawings or plans, we will be in touch
        within 24 hours
      </p>
       <div className="flex items-center justify-center mt-10">
       <button className="btn btn-outline text-white  btn-info px-10">Contact Us</button>
       </div>
       </div>
    </div>
  );
};

export default ContactSection;
