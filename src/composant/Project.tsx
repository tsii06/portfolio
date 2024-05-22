import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css';
import meImage from '../images/btp.png';
import cloud from '../images/cloud.png';
import code from '../images/btp1.png';
import git from '../images/git.png';

export const Project = () => {
  return (
    <div id='project' className='all'>
        <div className='titre'>
            <span>Portfolio</span>
            <h3>Mes recents projets depuis les 6 dernies mois</h3>
        </div>
        <div className='row'>
            <div className='col-12 col-md-6 d-flex justify-content-center'>
                <img src={meImage} alt='me' className='img-fluid w-100 h-100 object-fit-cover' />
            </div>
            <div className='col-12 col-md-6 info'>
                <h2>Systeme d'information</h2>
                <p>
                Développement d'un système d'information pour la gestion des données internes d'une organisation.
                </p>
                <div className='detail'>
                    <div className='bold'>
                        <p>Framework</p>
                        <p>Backend  </p>
                        <p>Base de données  </p>
                    </div>
                    <div>
                        <p>:Codegniter</p>
                        <p>:PHP</p>
                        <p>:Postgres</p>
                    </div>
                </div>
                <a href='/cv.pdf'><button className='g'><img src={git}/></button></a>
            </div>
        </div>

        <div className='row'>
            <div className='col-12 col-md-6 d-flex justify-content-center'>
                <img src={code} alt='me' className='img-fluid w-100 h-100 object-fit-cover' />
            </div>
            <div className='col-12 col-md-6 info'>
                <h2>VidyVaika</h2>
                <p>
                En collaboration avec mon groupe à l'université, nous avons développé une application multiplateforme
                 dédiée à la vente de voitures d'occasion ou neuves. Capacite d
                </p>
                <div className='detail'>
                    <div className='bold'>
                        <p>Framework</p>
                        <p>Backend  </p>
                        <p>Base de données  </p>
                    </div>
                    <div>
                        <p>:React & Ionic React</p>
                        <p>:Spring Boot</p>
                        <p>:Postgres & Mongo DB</p>
                    </div>
                </div>
                <a href='/cv.pdf'><button className='g'><img src={git}/></button></a>
            </div>
            
        </div>

        <div className='row'>
            <div className='col-12 col-md-6 d-flex justify-content-center'>
                <img src={cloud} alt='me' className='img-fluid w-100 h-100 object-fit-cover' />
            </div>
            <div className='col-12 col-md-6 info'>
                <h2>Gestion Meuble</h2>
                <p>
                Application pour gérer les fabrications et ventes de meuble d'un entreprise. Permet aussi de gerer les stock, l'entree et sortie 
                des meubles et aussi le gestion financieres
                </p>
                <div className='detail'>
                    <div className='bold'>
                        <p>Framework</p>
                        <p>Backend  </p>
                        <p>Base de données  </p>
                    </div>
                    <div>
                        <p>:Laravel</p>
                        <p>:PHP</p>
                        <p>:Postgres</p>
                    </div>
                </div>
                <a href='/cv.pdf'><button className='g'><img src={git}/></button></a>
            </div>
        </div>

        
        
      
    </div>
  );
}
