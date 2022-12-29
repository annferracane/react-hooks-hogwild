import React from "react";

function HogCard({ hog }) {

    const extraContent = (
        <div class="extra content">
            <span>Specialty: { hog.specialty }</span><br/>
            <span>Weight: { hog.weight }</span><br/>
            <span>Highest Medal Achieved: { hog["Highest Medal Achieved"] }</span>
        </div>
    );

    return (
        <div className="ui eight wide column">
            <div class="ui card">
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
                    {/* <div class="description">
                        Kristy is an art director living in New York.
                    </div> */}
                </div>
                { extraContent }
            </div>
        </div>
    )
};

export default HogCard;