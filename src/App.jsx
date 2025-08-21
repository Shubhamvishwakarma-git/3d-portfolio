import Hero from "./sections/Hero";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Contact from "./sections/contact";
import Footer from "./components/Footer";
import Resume from "./sections/Resume";

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Resume/>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
