import React from "react";

const Procard = ({ title, img, link }) => {
  //let{ title, img, link }=props.data;
  return (
    <section className="mx-auto w-fit  p-12 bg-neutral-50">
      <div className="w-60 h-fit group">
        <div className="relative overflow-hidden">
          <img className="h-52 w-full object-cover" src={img} alt="" />
          <div className="absolute  h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="bg-black text-white py-2 px-5">
                Visit This
              </button>
            </a>
          </div>
        </div>
      </div>
      <h2 className="text-3xl flex justify-center pt-2">{title}</h2>
    </section>
  );
};

export default Procard;
