import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import meImage from '../images/me.jpg';
import download from '../images/download.png';

export const About = () => {
  return (
    <div className='row int'>
      <div className='col-12 col-md-6 info'>
      <span>About</span>
        <h1>Developper Junior</h1>
        <p>
            Étudiant en L3 en Informatique avec une passion pour le développement de logiciels et d'applications web.
            Compétent en Spring, Java, Laravel, React et diverses bases de données. 
            Motivé par l'apprentissage continu et la mise en pratique de nouvelles technologies.
            Actuellement à la recherche de stages ou de projets collaboratifs pour développer davantage mes compétences et contribuer à des projets innovants.
        </p>
        <a href='/cv.pdf' download><button className='button'>DOWNLOAD CV <img src={download}/></button></a>
        <div className='detail'>
          <div className='bold'>
          <p>Email </p>
          <p>Contact  </p>
          <p>Adress  </p>
          <p>Age  </p>
          </div>
          <div>
          <p>:tsiory0006@gmail.com</p>
          <p>:034 76 207 59</p>
          <p>:Lot ICA 106 Antsahasoa</p>
          <p>:20</p>
          </div>
          
        </div>
      </div>
      <div className='col-12 col-md-6 phot'>
        <div className='photo'>
          <img src={meImage} alt='me' className='img-fluid' />
        </div>
      </div>
    </div>
  );
}