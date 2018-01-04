import React from 'react';

const Service = (props) => {
    return (
        <div className="feature-box">
            <i className="feature-box__icon icon-basic-message"></i>
            <h3 className="headin-tertiary u-margin-bottom-small">{props.service.title}</h3>
            <p className="feature-box__text">
                <p className="feature-box__prix">Avec contrat : {props.service.price} €</p>   
                <p className="feature-box__prix">Sans contrat : {props.service.priceAlt} €</p>
            </p>
        </div>
    )
}

export default Service;