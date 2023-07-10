import React from "react";
import pf from "../assets/pf.png";
//let logo = require("./assets/pf.png");
import res from "../assets/res.pdf";

const Hero = () => {
  return (
    <section id="start">
      <div className="flex justify-center flex-col-reverse md:flex-row  w-full  pt-40 items-center">
        <div className=" text-blue-900 text-center md:text-left pt-3 font-heading ">
          <p>Hey there</p>
          <p>this is,</p>
          <h1 className="xs:text-6xl text-4xl pt-5  text-blue-900 ">
            Shradha Mahajan
          </h1>

<<<<<<< HEAD
          <a href="https://shorturl.at/chDY7" target={"_blank"}>
=======
          <a href="https://shorturl.at/fkmI1" target={"_blank"}>
>>>>>>> 7feb21be840ba379dcb2041466b131f31d4cd94f
            <button className="p-4 bg-indigo-300 hover:bg-indigo-500 text-white mt-7 rounded-lg">
              View Resume
              <ion-icon name="document-attach-outline"></ion-icon>
              View Resume
              <ion-icon name="document-attach-outline"></ion-icon>
            </button>
          </a>
        </div>
        <div className="w-1/4 ">
          <img src={pf} alt="dfd" className="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

// <br className="md:hidden" />;
