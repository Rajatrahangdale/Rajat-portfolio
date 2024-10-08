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

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
};

export default App;
