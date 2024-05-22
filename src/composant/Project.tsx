import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css';
import btp from '../images/btp.png';
import cloud from '../images/cloud.png';
import gestion from '../images/gestion.png';
import meuble from '../images/meuble.png';
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
                <img src={gestion} alt='me' className='img-fluid w-100 h-100 object-fit-cover' />
            </div>
            <div className='col-12 col-md-6 info'>
                <h2>Systeme d'information</h2>
                <p>
                Développement d'un système d'information pour la gestion des affaires d'une entreprise. Ce système permet de suivre et de conclure une affaire
                 grâce à un processus de validation, allant du département initial jusqu'au chef des ressources humaines (RH).
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
                        <p>:Mysql</p>
                    </div>
                </div>
                <a href='https://github.com/tsii06/GestionCommerciale.git'><button className='g'><img src={git}  alt='me' /></button></a>
            </div>
        </div>

        <div className='row'>
            <div className='col-12 col-md-6 d-flex justify-content-center'>
                <img src={cloud} alt='me' className='img-fluid w-100 h-100 object-fit-cover' />
            </div>
            <div className='col-12 col-md-6 info'>
                <h2>VidyVaika</h2>
                <p>
  En collaboration avec mon groupe à l'université, nous avons développé une application multiplateforme dédiée à la 
  vente de voitures d'occasion et neuves. Cette application permet aux utilisateurs de publier et de vendre des voitures 
  via leur smartphone et de recevoir des notifications. Elle est également accessible via un site web, permettant de consulter les annonces de vente. Du côté administrateur, elle offre des outils de gestion pour paramétrer et administrer l'application.
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
                <a href='https://github.com/tsii06/mobil-s5.git'><button className='g'><img src={git}  alt='me' /></button></a>
            </div>
            
        </div>

        <div className='row'>
            <div className='col-12 col-md-6 d-flex justify-content-center'>
                <img src={btp} alt='me' className='img-fluid w-100 h-100 object-fit-cover' />
            </div>
            <div className='col-12 col-md-6 info'>
                <h2>BTP Construction</h2>
                <p>
  Application pour gérer les différents aspects du métier d'une entreprise de construction de BTP. Elle permet aux 
  clients du site de faire une demande de devis. Du côté administrateur, elle permet de gérer les demandes
   et d'analyser les états financiers à partir de graphiques et de statistiques.
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
                        <p>:Mysql</p>
                    </div>
                </div>
                <a href='https://github.com/tsii06/BTP.git'><button className='g'><img src={git}  alt='me' /></button></a>
            </div>
        </div>

        <div className='row'>
            <div className='col-12 col-md-6 d-flex justify-content-center'>
                <img src={meuble} alt='me' className='img-fluid w-100 h-100 object-fit-cover' />
            </div>
            <div className='col-12 col-md-6 info'>
                <h2>Gestion Meuble</h2>
                <p>
                Application pour gérer la fabrication et la vente de meubles d'une entreprise. Elle permet
   également de gérer les stocks, les entrées et sorties de meubles, ainsi que la gestion financière. De plus, 
   elle inclut des tableaux de bord et des statistiques pour l'analyse.
                </p>
                <div className='detail'>
                    <div className='bold'>
                        <p>Framework</p>
                        <p>Backend  </p>
                        <p>Base de données  </p>
                    </div>
                    <div>
                        <p>:JSP</p>
                        <p>:Java</p>
                        <p>:Postgres</p>
                    </div>
                </div>
                <a href='https://github.com/tsii06/GestionMeuble.git'><button className='g'><img src={git}  alt='me' /></button></a>
            </div>
        </div>

        
        
      
    </div>
  );
}
