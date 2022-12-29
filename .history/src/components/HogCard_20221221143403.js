import React from "react";

function HogCard({ hog }) {
    return (
        <div className="ui eight wide column">
            <div></div>
            <img src={ hog.image } alt={ hog.name }/>
        </div>
    )
};

export default HogCard;