import React from "react";

function HogCard({ hog }) {

    const extraContent = (
        <div class="extra content">
            <span>Specialty: { hog.specialty }</span><br/>
            <span>Weight: { hog.weight }</span><br/>
            <span>Highest Medal Achieved: { hog["highest medal achieved"] }</span>
        </div>
    );

    return (
        <div className="ui eight wide column">
            <div class="ui card" onClick={ handleClick }>
                <div class="image">
                    <img src={ hog.image } />
                </div>
                <div class="content">
                    <a class="header">{ hog.name }</a>
                    <div class="meta">
                        <span class="date">
                        <i class="question circle icon"></i><br/>
                        Click for More Info
                        </span>
                    </div>
                </div>
                { extraContent }
            </div>
        </div>
    )
};

export default HogCard;