import React from "react";

function HogCard({ hog }) {

    const extraContent = {
        
    }
    return (
        <div className="ui eight wide column">
            <div class="ui card">
                <div class="image">
                    <img src={ hog.image } />
                </div>
                <div class="content">
                    <a class="header">{ hog.name }</a>
                    <div class="meta">
                        <span class="date">Joined in 2013</span>
                    </div>
                    {/* <div class="description">
                        Kristy is an art director living in New York.
                    </div> */}
                </div>
            </div>
        </div>
    )
};

export default HogCard;