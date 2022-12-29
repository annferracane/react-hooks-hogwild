import React from "react";

function HogCard({ hog }) {
    return (
        <div className="ui eight wide column">
            <div className="pigTile"></div>
            <img src={ hog.image } alt={ hog.name }/>
        </div>
    )
};

export default HogCard;