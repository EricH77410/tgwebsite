import React from 'react';

const Card = (props) => {
    const list = props.contract.list.map((item, id) => {
        return <li key={id}>{item}</li>
    })
    return (
        <div class="card">
            <div class="card__side card__side--front">
                <div class="card__picture card__picture--1">
                    &nbsp;
                </div>
                <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--1">
                        {props.contract.title}
                    </span>                                    
                </h4>
                <div class="card__details">
                    <ul>
                        {list}
                    </ul>
                </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
                <div class="card__cta">
                    <div class="card__price-box">
                        <p class="card__price-only">Prix</p>
                        <p class="card__price-value">{props.contract.price} €</p>
                    </div>
                    <a href="#popup" class="btn btn--white">Commander</a>
                </div>
            </div>
        </div>
    )
}

export default Card;