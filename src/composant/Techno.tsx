import 'bootstrap/dist/css/bootstrap.min.css';
import './Techno.css';
import postgres from '../images/postgres.png';
import react from '../images/react.png';
import laravel from '../images/laravel.png';
import spring from '../images/spring.png';
import mysql from '../images/mysql.png';
import php from '../images/php.png';
import java from '../images/java.png';
import check from '../images/check.png';

export const Techno = () => {
  return (
    <div id='skills' className='all'>
        <div className='titre'>
            <span>Skills and Education</span>
            <div>
                <h3>PROGRAMMING LANGUAGES & TOOLS</h3>
                <div className='img'>
                <img src={postgres} alt='me' className='img-fluid' />
                <img src={mysql} alt='me' className='img-fluid' />
                <img src={java} alt='me' className='img-fluid' />
                <img src={php} alt='me' className='img-fluid' />
                <img src={laravel} alt='me' className='img-fluid' />
                <img src={spring} alt='me' className='img-fluid' />
                <img src={react} alt='me' className='img-fluid' />
                </div>
            </div>
            <div>
                <h3>SKILL</h3>
                <ul className='ski'>
                    <li><img src={check}  alt='me' />LeaderShip</li>
                    <li><img src={check}  alt='me' />Travail en equipe</li>
                    <li><img src={check}  alt='me' />Dactylographie</li>
                </ul>
            </div>
        </div>
            <div className='row flex'>
                <div className='col-12 col-md-6 '>
                    <h3>BACCALAUREAT</h3>
                    <h4>Lycée Saint Pierre Malaza</h4>
                    <p>Option D Mention Bien</p>
                </div>
                <div className='col-12 col-md-6  date'>
                    <h4>Octobre 2020 - Juillet 2021</h4>
                </div>
            </div> 
            <div className='row flex'>            
                <div className='col-12 col-md-6 '>
                    <h3>LICENCE EN INFORMATIQUE</h3>
                    <h4>IT University</h4>
                    <p>Option Developpement</p>
                </div>
                <div className='col-12 col-md-6  date'>
                    <h4>Septembre 2021 - Juin 2024</h4>
                </div>
                </div>
    </div>
  );
}
