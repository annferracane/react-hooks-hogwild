import React, { useState } from "react";

function HogCard({ hog }) {

    const [showExtraContent, setShowExtraContent] = useState(false);

    const extraContent = (
        <div class="extra content">
            <span>Specialty: { hog.specialty }</span><br/>
            <span>Weight: { hog.weight }</span><br/>
            <span>Highest Medal Achieved: { hog["highest medal achieved"] }</span>
        </div>
    );

    function handleClick(e) {

        showExtraContent ? setShowExtraContent(false) : setShowExtraContent(true);

    }

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
                { showExtraContent ? extraContent : null }
            </div>
        </div>
    )
};

export default HogCard;