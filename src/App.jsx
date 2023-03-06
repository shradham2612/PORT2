import { useState } from "react";
import "./index.css";

import {
  Contact,
  Footer,
  Hero,
  Navbar,
  Projects,
  Skills,
  About,
} from "./components";
// import {pf} from './assets';

function App() {
  return (
    <>
        <Navbar />
        <div className="bg-neutral-50 w-full h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
