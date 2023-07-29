import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Learning from "./components/Learning";
import Contact from "./components/Contact";
function App()
{
    return (
        <div>
          <Navbar />

            <Home />

        <About />

        <Portfolio />
         <Learning />
       
    
            
        <Contact />
   
          <SocialLinks />
        </div>
      );
    
}


export default App;