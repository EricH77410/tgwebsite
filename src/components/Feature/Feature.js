import React from 'react';

const Feature = (props) => {
    return (
        <div className="feature-box">
            <i className="feature-box__icon icon-basic-world"></i>
            <h3 className="headin-tertiary u-margin-bottom-small">{props.feature.title}</h3>
            <p className="feature-box__text">
                {props.feature.text}
            </p>
        </div>
    )
}

export default Feature