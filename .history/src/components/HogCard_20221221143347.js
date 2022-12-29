import React from "react";

function HogCard({ hog }) {
    return (
        <div className="pigTile">
            <img src={ hog.image } alt={ hog.name }/>
        </div>
    )
};

export default HogCard;