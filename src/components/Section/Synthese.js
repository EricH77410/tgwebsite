import React from 'react';

const Synthese = () => {
    return (
        <div className="section-about">
               <div className="u-center-text u-margin-bottom-big">
                   <h2 className="heading-secondary">
                        Un logiciel de gestion pratique et complet
                    </h2>
               </div> 
               <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Une présentation claire
                        </h3>
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam libero perspiciatis quasi rerum voluptatum alias, tenetur iste nostrum vero nihil explicabo veniam! Ratione molestiae quis, eligendi vitae facere sed sit.
                            </p>
                        
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Tous les modules sont intégrés (pas de mauvaises surprises)
                        </h3>
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam libero perspiciatis quasi rerum voluptatum alias, tenetur iste nostrum vero nihil.
                            </p>
                            
                            <a href="/" className="btn-text">Plus &rarr;</a>                        
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src="assets/img/Sommaire.png" alt="photo1" className="composition__photo composition__photo--p1" />
                            <img src="assets/img/Devis.png" alt="photo3" className="composition__photo composition__photo--p2" />
                            <img src="assets/img/ordo.png" alt="Photo3" className="composition__photo composition__photo--p3" />
                        </div>
                    </div>
                </div>               
            </div>
    )
}

export default Synthese;