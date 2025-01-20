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
        Titulaire d'une licence en Informatique de l'Université ITU, spécialisé en développement Fullstack.
        Passionné par la création de solutions numériques innovantes, je suis motivé par le désir de relever des défis techniques et de contribuer à des projets ayant un impact réel.
         Mon engagement envers l'apprentissage continu me pousse à toujours améliorer mes compétences et à explorer de nouvelles approches pour répondre aux besoins technologiques actuels et futurs.
        </p>
        <a href='/cv.pdf' download><button className='button'>DOWNLOAD CV <img src={download}  alt='me' /></button></a>
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
          <p>:21</p>
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