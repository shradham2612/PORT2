import { useState, useEffect } from "react";
import "./index.css";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import ClipLoader from "react-spinners/ClipLoader";
import {
  Contact,
  Footer,
  Hero,
  Navbar,
  Projects,
  Skills,
  About,
} from "./components";
import HashLoader from "react-spinners/HashLoader";
// import {pf} from './assets';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2550);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex flex-col h-screen justify-center items-center">
          <HashLoader
            color={"#186DD9"}
            loading={loading}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <h2 className="text-indigo-600 pt-6">Loading . .</h2>
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="bg-neutral-50 w-full h-screen">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
