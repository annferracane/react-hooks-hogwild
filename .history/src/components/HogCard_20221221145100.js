import React from "react";

function HogCard({ hog }) {
    return (
        <div className="ui eight wide column">
            <div className="ui card">
                <img src={ hog.image } alt={ hog.name }/>
            </div>
        </div>
    )
};

export default HogCard;