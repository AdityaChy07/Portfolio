import { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";
import Loader from "./components/ui/Loader";
import ScrollProgress from "./components/ui/ScrollProgress";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>

   
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Scroll To Top Button */}
      <ScrollToTop />
    </>
  );
}

export default App;