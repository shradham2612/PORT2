import React from "react";
//import motion from "react"
import { motion, useAnimation } from "framer-motion";
import { useEffect} from "react";
import { useInView } from "react-intersection-observer";

const Cardthis = ({  title, img }) => {
  // const {ref, inView} =useInView();
  // const animation =useAnimation();

  // useEffect(() =>{
   
  // // console.log("use effect =",inView);
  //  if(inView)
  //   {
  //     animation.start({
  //       rotate: 0,
  //       transition: {
  //         type: "spring",
  //         damping: 20,
  //         mass: 0.75,
  //         stiffness: 50,
  //       },
  //     });

  // }
  // if(!inView){
  //   animation.start({rotate:360})
  // }},[inView]);
  return (
    <motion.div
      className="p-5 koko md:w-1/5 sm:w-1/4 ss:w-1/3 xs:w-1/2 "
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div  className="bg-white rounded-lg shadow-lg">
        <img src={img} alt="" className="rounded-t-lg lop" />
        <div className="p-6">
          <h2 className="font-bold mb-2 text-2xl text-purple-800 text-center">
            {title}
          </h2>
          {/* <p className="text-purple-700 mb-2">{content}</p> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Cardthis;



