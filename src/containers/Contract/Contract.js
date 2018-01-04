import React, { Component } from 'react'

import Card from '../../components/Card/Card';

export default class Contract extends Component {
    state = {
        contracts: [
            {
                title: 'Gestion + Imagerie',
                price: '679',
                list: ['Mise à jour', 'Support téléphonique','Prise en main à distance']
            },
            {
                title: 'Gestion + Imagerie (réseau)',
                price: '769',
                list: ['Mise à jour', 'Support téléphonique','Prise en main à distance']
            },
            {
                title: 'Gestion',
                price: '529',
                list: ['Mise à jour', 'Support téléphonique','Prise en main à distance']
            },
            {
                title: 'Gestion (réseau)',
                price: '635',
                list: ['Mise à jour', 'Support téléphonique','Prise en main à distance']
            },

        ]
    }
  render() {
      const renderContract = this.state.contracts.map((contract) => {
          return (
              <div className="col-1-of-4">
                <Card contract={contract}/>
              </div>
          )
      })
    return (
        <div className="section-tours" id="section-tours">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                Contrats de maintenance
                </h2>
            </div>
            <div className="row">
                {renderContract}
            </div>
        </div>
    )
  }
}
