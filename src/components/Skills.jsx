import React from "react";
import { languages } from "../constants";
import Cardthis from "./CardL";

const Skills = () => {
  return (
    <section id="skill">
      <h2 className="flex justify-center text-blue-900 text-4xl pt-36 bg-neutral-50">
        SKILLS
      </h2>

      <div className="flex justify-center  items-baseline- flex-wrap w-full bg-neutral-50">
        {languages.map((card) => (
          <Cardthis key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

//  {
//    projects.map((card) => <Procard key={card.id} {...card} />);
//  }