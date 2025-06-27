import Award from "./Award";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Education from "./Education";
import Stats from "./Stats";
import OpenAccount from "../OpenAccount";
import Nabvar from "../Navbar";
import Footer from "../Footer";

function HomePage() {
  return (
    <>
    
      <Hero />
      <Award />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount/>
      
    </>
  );
}

export default HomePage;
