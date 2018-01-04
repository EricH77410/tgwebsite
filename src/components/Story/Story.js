import React from 'react';

const Story = (props) => {
    return (
        <div className="story">
            <figure className="story__shape">
                <img className="story__img" src={props.story.img} alt="Person"/>
                <figcaption className="story__caption">{props.story.author} <blockquote className="citation">{props.story.quality}</blockquote> </figcaption>
            </figure>
            <div className="story__text">
                <p>
                    <blockquote className="citation">{props.story.text}</blockquote>
                </p>
            </div>
        </div> 
    )
}

export default Story;