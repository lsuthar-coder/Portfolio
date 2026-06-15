import CustomCursor from "../components/CustomCursor";
import {Hero} from "../components/Hero";
import {About} from "../components/About";
import {Skills} from "../components/Skills";
import {Stripe} from "../components/Stripe";
import {Projects} from "../components/Projects";
import {Experience} from "../components/Experience";
import {Contact} from "../components/Contact";
import {Footer} from "../components/Footer";
import {Nav} from "../components/Nav";
import "../styles/global.css";
export default function Portfolio({theme, setTheme}) {
  return (
    <>

        <div className={`leeladhar-portfolio theme-${theme}`}>
        <CustomCursor />
        <Nav theme={theme} setTheme={setTheme} /> 
        <Hero />
        <About />
        <Skills />
        <Stripe />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
        </div>
        
    </>
  );
}