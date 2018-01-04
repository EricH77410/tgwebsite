import React, { Component } from 'react'

import Service from '../../components/Service/Service';
import Story from '../../components/Story/Story';

export default class Services extends Component {
    state = {
        services: [
            {
                title: 'Pack 200 SMS',
                price: '36',
                priceAlt: '46'
            },
            {
                title: 'Pack 500 SMS',
                price: '85',
                priceAlt: '106'
            },
            {
                title: 'Pack 1000 SMS',
                price: '155',
                priceAlt: '198'
            },
        ],
        stories: [
            {
                img:'assets/img/Story-1.png',
                text: "C'est un service discret et pratique dont je ne peux plus me passer. Et puis ça fait très professionnel !",
                author: 'Mme Sylvie D.',
                quality: 'Patiente'
            },
            {
                img:'assets/img/Story-2.png',
                text: "Finies les confirmations par téléphone des rendez-vous. Désormais je ne rappelle les patients que lorsqu c'est nécessaire. Quel gain de temps !",
                author: 'Mlle Sandrine L.',
                quality: 'Assistante dentaire'
            },
            {
                img:'assets/img/Story-3.png',
                text: "Depuis qu'on utilise le service SMS, on a constaté une baisse très sensible des rendez-vous oublés. Voilà un investissement vraiment utile.",
                author: 'Dr Laurent B.',
                quality: 'Chirurgien-dentiste'
            }
        ]
    }
  render() {
    const renderServices = this.state.services.map((service, id) => {
        return (
            <div className="col-1-of-3">
                <Service key={id} service={service} />
            </div>
        )
    });

    const renderStories = this.state.stories.map((story) => {
        return <Story story={story}/>
    })

    return (
        <div className="section-features">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">Contrats de maintenance</h2>
            </div>
            <div className="presentation">
                
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary">5 bonnes raisons d'utiliser le service SMS</h3>
                        <ol>
                            <li>Réduiser <strong>l'absentéisme</strong> au cabinet</li>
                            <li>Optimiser le <strong>taux d'occupation</strong> des fauteuils</li>
                            <li>Limitez les <strong>confirmations</strong> par téléphone</li>
                            <li>Offrez un <strong>service professionnel</strong></li>
                            <li>Obtenez un <strong>retour sur investissement</strong> dès le premier rendez-vous manqué évité</li>
                        </ol>
                    </div>
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary">Les +</h3>
                        <ul>
                            <li>Rappel automatique des rendez-vous par SMS</li>
                            <li>Interaction avec le carnet de rendez-vous</li>
                            <li>Envois manuels ou automatiques</li>
                            <li>Suivi des envois / réceptions en temps réel</li>
                            <li>Modèles de messages (rappel de RDV,visite de contrôle, impayé, anniversaire...)</li>
                            <li>Fonctionne avec tous les téléphones portables</li>
                        </ul>
                    </div>
                </div>               
                <div className="row">
                    <div className="presentation__img-sms">
                        <img src="assets/img/sms.png" alt="sms"/>
                    </div>   
                    <h3>Ce qu'ils en pensent</h3>
                    {renderStories}

                </div>
            </div>
            
        </div>        
    )
  }
}
// {renderServices}