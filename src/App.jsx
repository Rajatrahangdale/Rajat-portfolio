/**
 * @copyright 2024 Rajatrahangdale
 * @license Apache-2.0
 */
// Node modules
import { ReactLenis } from "lenis/react";
// components
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Reviews from "./Components/Reviews";
import Skills from "./Components/Skills";
import Work from "./Components/Work";

const App = () => {
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Reviews />
        <Contact />
        <Footer />
      </main>
    </ReactLenis>
  );
};

export default App;
