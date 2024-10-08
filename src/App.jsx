/**
 * @copyright 2024 Rajatrahangdale
 * @license Apache-2.0
 */

/**
 * Components
 */
import About from "./Components/About";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </>
  );
};

export default App;
