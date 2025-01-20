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
import python from '../images/python.png';

export const Techno = () => {
  return (
    <section id='skills' className='all'>
        <div className='titre'>
            <span>Compétences et Formation</span>
            
            {/* Section Technologies */}
            <div className="skills-section">
                <h3>LANGAGES DE PROGRAMMATION & OUTILS</h3>
                <div className='img'>
                    <img src={postgres} alt='PostgreSQL' className='img-fluid' title="PostgreSQL" />
                    <img src={mysql} alt='MySQL' className='img-fluid' title="MySQL" />
                    <img src={java} alt='Java' className='img-fluid' title="Java" />
                    <img src={php} alt='PHP' className='img-fluid' title="PHP" />
                    <img src={laravel} alt='Laravel' className='img-fluid' title="Laravel" />
                    <img src={spring} alt='Spring' className='img-fluid' title="Spring" />
                    <img src={react} alt='React' className='img-fluid' title="React" />
                    <img src={python} alt='Python' className='img-fluid' title="Python" />
                </div>
            </div>

            {/* Section Compétences */}
            <div className="skills-section">
                <h3>COMPÉTENCES</h3>
                <ul className='ski'>
                    <li><img src={check} alt='check' />Leadership</li>
                    <li><img src={check} alt='check' />Travail en équipe</li>
                    <li><img src={check} alt='check' />Conception de projets</li>
                    <li><img src={check} alt='check' />Apprentissage rapide</li>
                    <li><img src={check} alt='check' />Adaptabilité</li>
                </ul>
            </div>

            {/* Section Expériences Professionnelles */}
            <div className="experience-section">
                <h3>EXPÉRIENCES PROFESSIONNELLES</h3>
                <div className="experience-item">
                    <h4>ANALYSTE DES DONNÉES SPATIALES ET DÉVELOPPEUR (Stage)</h4>
                    <h5>AGETIPA - Août 2024 à Janvier 2025</h5>
                    <ul>
                        <li>
                            <strong>Conception et gestion d'une base de données pour la mobilité à Antananarivo</strong> : 
                            structuration des données démographiques, géographiques (communes), trafic et transport public (bus, etc.).
                        </li>
                        <li>
                            <strong>Processus ETL</strong> : Intégration de données provenant de multiples sources dans une base PostgreSQL
                            centralisée, en nettoyant et transformant les données pour garantir leur cohérence.
                        </li>
                        <li>
                            <strong>Développement de l'interface de visualisation</strong> : Création d'une interface adaptée et claire, 
                            facilitant la consultation des données par les décideurs.
                        </li>
                        <li>
                            <strong>Mise en place de visualisations analytiques</strong> : Génération de graphiques et tableaux analytiques 
                            permettant une prise de décision éclairée.
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Section Formation */}
        <div className="education-section">
            <h3>CURSUS ACADÉMIQUE</h3>
            <div className='row flex'>
                <div className='col-12 col-md-6'>
                    <h3>BACCALAURÉAT</h3>
                    <h4>Lycée Saint Pierre Malaza</h4>
                    <p>Option D Mention Bien</p>
                </div>
                <div className='col-12 col-md-6 date'>
                    <h4>Octobre 2020 - Juillet 2021</h4>
                </div>
            </div> 

            <div className='row flex'>            
                <div className='col-12 col-md-6'>
                    <h3>LICENCE EN INFORMATIQUE</h3>
                    <h4>IT University</h4>
                    <p>Option Développement</p>
                </div>
                <div className='col-12 col-md-6 date'>
                    <h4>Septembre 2021 - Juin 2024</h4>
                </div>
            </div>
        </div>
    </section>
  );
}
