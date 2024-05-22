import 'bootstrap/dist/css/bootstrap.min.css';
import './Intro.css';
import facebook from '../images/facebook.png';
import linkedin from '../images/linkedin.png';
import git from '../images/git.png';

export const Intro = () => {
  return (
    <div className='intro'>
      <h1>Hi, I'm</h1>
        <h1>HONITRINILA NAMBINITSALAMASOA</h1>
        <h1> <span>Tsiory</span> Fanantenana</h1>
        <a href='#about'><button className='buttons'>LET'S BEGIN</button></a>
        <div>
          <ul className='lien'>
            <li><a href='https://web.facebook.com/tsiory.fanantenana.75'><img src={facebook} alt='me' className='img-fluid' /></a></li>
            <li><a href='https://github.com/tsii06?tab=repositories'><img src={git} alt='me' className='img-fluid' /></a></li>
            <li><a href='https://www.linkedin.com/in/tsiory-fanantenana-0062a230a'><img src={linkedin} alt='me' className='img-fluid' /></a></li>
          </ul>
        </div>
    </div>
  );
}