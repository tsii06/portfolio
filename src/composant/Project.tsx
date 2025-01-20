import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css';
import btp from '../images/btp.png';
import cloud from '../images/cloud.png';
import meuble from '../images/meuble.png';
import git from '../images/git.png';
import coupure from '../images/coupure.png';
import med from '../images/med.png';
import visualisation from '../images/visualisation.png';

export const Project = () => {
  return (
    <div id='project' className='all'>
        <div className='titre'>
            <span>Projets</span>
        </div>
        <div className='row'>
            <div className='col-12 col-md-6 d-flex justify-content-center'>
                <img src={visualisation} alt='me' className='img-fluid w-100 h-100 object-fit-cover' />
            </div>
            <div className='col-12 col-md-6 info'>
                <h2>TanaMobility</h2>
                <p>
                Le projet TanaMobility est une plateforme interactive dédiée à la visualisation des flux de transport à Antananarivo, Madagascar. Elle utilise des données géospatiales et des indicateurs clés (passagers, vitesse commerciale, itinéraires) pour fournir une compréhension approfondie des dynamiques de mobilité urbaine.
                 Développée avec Python (Dash et Plotly) et PostgreSQL, cette plateforme aide les urbanistes et décideurs à optimiser la planification des infrastructures et à promouvoir une mobilité durable grâce à des visualisations claires et configurables.
                </p>
                <div className='detail'>
                    <div className='bold'>
                        <p>Framework</p>
                        <p>Backend  </p>
                        <p>Base de données  </p>
                    </div>
                    <div>
                        <p>:Dash</p>
                        <p>:Python</p>
                        <p>:PostgreSQL</p>
                    </div>
                </div>
                <a href='https://github.com/tsii06/Mobility'><button className='g'><img src={git}  alt='me' /></button></a>
            </div>
        </div>
        <div className='row'>
            <div className='col-12 col-md-6 d-flex justify-content-center'>
                <img src={meuble} alt='me' className='img-fluid w-100 h-100 object-fit-cover' />
            </div>
            <div className='col-12 col-md-6 info'>
                <h2>Gestion de Meuble</h2>
                <p>
                    Application de gestion de fabrication de meubles permettant de suivre la production depuis la matière première jusqu'au produit fini. 
                    Le système calcule automatiquement les coûts de production et génère des rapports détaillés sur les stocks et la rentabilité.
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
                <a href='https://github.com/tsii06/Meuble.git'><button className='g'><img src={git}  alt='me' /></button></a>
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
                        <p>Affichage</p>
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
        <div className='row'>
            <div className='col-12 col-md-6 d-flex justify-content-center'>
                <img src={coupure} alt='me' className='img-fluid w-100 h-100 object-fit-cover' />
            </div>
            <div className='col-12 col-md-6 info'>
                <h2>Gestion Coupure de courant</h2>
                <p>
                L'application est conçue pour gérer les coupures de courant dans une université. Elle permet de prédire les moments de la journée où le courant
                 pourrait être coupé, afin d'éviter les périodes sans électricité. Cela est possible grâce à la collecte de données sur l'utilisation du courant au sein de l'université, 
                telles que la puissance des panneaux solaires, l'état des batteries, et la consommation électrique des élèves.
                </p>
                <div className='detail'>
                    <div className='bold'>
                        <p>Affichage</p>
                        <p>Backend  </p>
                        <p>Base de données  </p>
                    </div>
                    <div>
                        <p>:JSP</p>
                        <p>:Java</p>
                        <p>:Postgres</p>
                    </div>
                </div>
                <a href='https://github.com/tsii06/electricite.git'><button className='g'><img src={git}  alt='me' /></button></a>
            </div>
        </div>

        <div className='row'>
            <div className='col-12 col-md-6 d-flex justify-content-center'>
                <img src={med} alt='me' className='img-fluid w-100 h-100 object-fit-cover' />
            </div>
            <div className='col-12 col-md-6 info'>
                <h2>MediMaladie</h2>
                <p>
                L'application permet de diagnostiquer les maladies possibles d'un patient en fonction de ses symptômes. Une fois la maladie identifiée, elle propose des médicaments appropriés. 
                Pour sélectionner les médicaments les moins chers, l'application utilise l'algorithme du simplexe afin d'optimiser les coûts.
                </p>
                <div className='detail'>
                    <div className='bold'>
                        <p>Affichage</p>
                        <p>Backend  </p>
                        <p>Base de données  </p>
                    </div>
                    <div>
                        <p>:JSP</p>
                        <p>:Java</p>
                        <p>:Postgres</p>
                    </div>
                </div>
                <a href='https://github.com/tsii06/maladie.git'><button className='g'><img src={git}  alt='me' /></button></a>
            </div>
        </div>

        
        
      
    </div>
  );
}
