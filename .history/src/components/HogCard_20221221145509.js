import React from "react";

function HogCard({ hog }) {
    return (
        <div className="ui eight wide column">
            <div class="ui card">
                <div class="image">
                    <img src="/images/avatar2/large/kristy.png" />
                </div>
                <div class="content">
                    <a class="header">Kristy</a>
                    <div class="meta">
                        <span class="date">Joined in 2013</span>
                    </div>
                    <div class="description">
                        Kristy is an art director living in New York.
                    </div>
                </div>
        <div class="extra content">
    <a>
      <i class="user icon"></i>
      22 Friends
    </a>
  </div>
</div>
        </div>
    )
};

export default HogCard;