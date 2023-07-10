import React from "react";
import pf from "../assets/pf.png";
import wave from "../assets/wave.gif";
import hi from "../assets/hi.jpg";

const About = () => {
  return (
    <section id="About">
      <h2 className="flex justify-center text-blue-900 text-4xl pt-24 bg-neutral-50">
        About Me
      </h2>
      <div className="flex justify-center items-center w-full  bg-neutral-50">
        <div className="flex justify-center flex-col-reverse md:flex-row pt-6 w-2/3 ">
          <div className="text-xl text-indigo-300 m-6 md :text-left lg:text-left xl:text-left text-center ">
            <p className="  ">
              I am a final year undergraduate student of Computer Science and
              Engineering, currently focussing on Data Structures and Algorithms
              and Web development. Apart from studies I pursue my hobby in
              Photography and Stocks.
            </p>
          </div>
          <div>
            <img
              src={hi}
              alt=""
              className=" flex justify-center hi mpl w-2/3 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// flex justify-center md:mr-44 lg:mr-44 xl:mr-44
