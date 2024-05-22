import { Navy } from "../composant/Navy";
import { About } from "../composant/About";
import { Intro } from "../composant/Intro";
import { Project } from "../composant/Project";
import { Techno } from "../composant/Techno";
import { Footer } from "../composant/Footer";
import './Acceuil.css';

export const Acceuil = () => {
  return (
    <div>
      <Navy />
  
          <Intro/>
      <div id='about'  className="row">
          <div className="col-lg-8 mx-auto">
          <About />
                <Techno/>
                <Project/>
          
          </div>
            
      </div>
      <Footer/>
    </div>
  );
}
