import React, { Component } from 'react'

import Feature from '../../components/Feature/Feature';

export default class Features extends Component {
    state = {
        features:[
            {
                title:'Agenda',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam libero perspiciatis quasi rerum voluptatum alias, tenetur iste nostrum vero nihil explicabo veniam! Ratione molestiae quis, eligendi vitae facere sed sit.'
            },
            {
                title:'Comptabilité',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam libero perspiciatis quasi rerum voluptatum alias, tenetur iste nostrum vero nihil explicabo veniam! Ratione molestiae quis, eligendi vitae facere sed sit.'
            },
            {
                title:'Ordonnance',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam libero perspiciatis quasi rerum voluptatum alias, tenetur iste nostrum vero nihil explicabo veniam! Ratione molestiae quis, eligendi vitae facere sed sit.'
            },
            {
                title:'Télétransmission',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam libero perspiciatis quasi rerum voluptatum alias, tenetur iste nostrum vero nihil explicabo veniam! Ratione molestiae quis, eligendi vitae facere sed sit.'
            },
        ]
    }
  render() {
      const renderFeatures = this.state.features.map((feature) => {
          return (
              <div className="col-1-of-4">
                <Feature feature={feature}/>
              </div>
          )
      })
    return (
      <div className="section-features">
        <div className="row">
            {renderFeatures}
        </div>        
      </div>
    )
  }
}
