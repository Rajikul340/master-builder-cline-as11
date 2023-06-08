import React, { useState } from "react";
import { AiFillDribbbleSquare } from "react-icons/ai";
import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const QualifiedEngineer = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <div>
      <h1 className="uppercase flex text-[#3ABFF8] items-center  my-10 font-bold md:text-4xl text-2xl mx-5">
        <span>
          <AiFillDribbbleSquare size={32} />
        </span>
        <span> Qualified Engineer</span>
      </h1>

      <div className="mx-5 md:grid md:grid-cols-4 gap-5 ">
        <div className="card">
          <motion.div
            initial={false}
            animate={
              isLoaded && isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
          >
            <img src='https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg?auto=compress&cs=tinysrgb&w=400' alt="" onLoad={() => setIsLoaded(true)} />
          </motion.div>

          <div className="card-body bg-[#3ABFF8]">
            <h2 className="card-title uppercase"> Bafeen wormer</h2>
            <p className="capitalize text-white font-bold">
              achitecture, oxford university
            </p>
          </div>
        </div>
        <div className="card ">
         
        <motion.div
            initial={false}
            animate={
              isLoaded && isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
          >
            <img src='https://images.unsplash.com/photo-1581092918484-8313ada2183a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNpdmlsJTIwZW5naW5lZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60 ' alt="" onLoad={() => setIsLoaded(true)} />
          </motion.div>

          <div className="card-body bg-[#3ABFF8]">
            <h2 className="card-title uppercase"> kornale ahede</h2>
            <p className="capitalize text-white font-bold">
              senior engineer, harvard university
            </p>
          </div>
        </div>
        <div className="card">
       

        <motion.div
            initial={false}
            animate={
              isLoaded && isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
          >
            <img src='https://images.pexels.com/photos/8960933/pexels-photo-8960933.jpeg?auto=compress&cs=tinysrgb&w=400' alt="" onLoad={() => setIsLoaded(true)} />
          </motion.div>
          <div className="card-body bg-[#3ABFF8]">
            <h2 className="card-title uppercase"> sam saad wormer</h2>
            <p className="capitalize text-white font-bold">
           
              designer, politokkor ltd
            </p>
          </div>
        </div>
        <div className="card">
        <motion.div
            initial={false}
            animate={
              isLoaded && isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
          >
            <img src='https://images.pexels.com/photos/6474493/pexels-photo-6474493.jpeg?auto=compress&cs=tinysrgb&w=400' alt="" onLoad={() => setIsLoaded(true)} />
          </motion.div>

          <div className="card-body bg-[#3ABFF8]">
            <h2 className="card-title uppercase"> Manker bosster</h2>
            <p className="capitalize text-white font-bold">
              civil engineer, softcad ltd
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualifiedEngineer;


// https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg?auto=compress&cs=tinysrgb&w=400
// https://images.pexels.com/photos/6474493/pexels-photo-6474493.jpeg?auto=compress&cs=tinysrgb&w=400
// https://images.pexels.com/photos/8960933/pexels-photo-8960933.jpeg?auto=compress&cs=tinysrgb&w=400
// https://images.unsplash.com/photo-1581092918484-8313ada2183a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNpdmlsJTIwZW5naW5lZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60