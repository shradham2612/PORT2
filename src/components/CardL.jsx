import React from "react";

const Cardthis = ({ content, title, img }) => {
  return (
    <div className="p-5 koko md:w-1/4 sm:w-1/3 ss:w-1/2">
      <div className="bg-white rounded-lg shadow-lg">
        <img src={img} alt="" className="rounded-t-lg lop" />
        <div className="p-6">
          <h2 className="font-bold mb-2 text-2xl text-purple-800">{title}</h2>
          <p className="text-purple-700 mb-2">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Cardthis;
