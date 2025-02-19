import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Header from "./components/layouts/Header";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Blog />
      <Contact />
    </>
  );
}

export default App;
