import React, { useState } from "react";

function HogCard({ hog }) {

    const [showExtraContent, setShowExtraContent] = useState(false);

    console.log(hog.greased);

    const extraContent = (
        <div className="extra content">
            <span>Specialty: { hog.specialty }</span><br/>
            <span>Weight: { hog.weight }</span><br/>
            <span>Greased: { hog.greased ? "Yes" : "No" }</span><br/>
            <span>Highest Medal Achieved: { hog["highest medal achieved"] }</span>
        </div>
    );

    function handleClick(e) {
        showExtraContent ? setShowExtraContent(false) : setShowExtraContent(true);
    }

    return (
        <div className="ui eight wide column">
            <div className="ui card" onClick={ handleClick }>
                <div className="image">
                    <img src={ hog.image } alt={ hog.name } />
                </div>
                <div className="content">
                    <h3 href="#" className="header">{ hog.name }</a>
                    <div className="meta">
                        <span className="date">
                        <i className="question circle icon"></i><br/>
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