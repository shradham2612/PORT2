import React from "react";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className="bg-violet-300 ">
      <div className="bg-violet-300 p-10 text-blue-900">
        <div className="flex justify-around flex-row">
          <div className="flex-col">
            {footerLinks.map((footerlink) => (
              <div key={footerlink.key}>
                <h3 className="pb-3 text-lg font-semibold">
                  {footerlink.title}
                </h3>

                {footerlink.links.map((link, index) => (
                  <a href={`#${link.id}`}>
                    <h2
                      key={link.name}
                      className="pb-1 hover:text-white cursor-pointer"
                    >
                      {link.name}{" "}
                    </h2>
                  </a>
                ))}
              </div>
            ))}
          </div>

          <div className="flex-col">
            <h3 className="pb-3 text-lg font-semibold">Social Media</h3>

            {socialMedia.map((social, index) => (
              <a href={social.link}>
                <img
                  key={social.id}
                  src={social.icon}
                  alt={social.id}
                  className={`w-[21px] h-[21px] object-contain cursor-pointer mb-3`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-violet-300 font-bold text-xl cursor-pointer flex justify-center text-slate-50 pb-8">
        <span className="font-dancing text-4xl ">Smah</span>
      </div>
    </section>
  );
};

export default Footer;
