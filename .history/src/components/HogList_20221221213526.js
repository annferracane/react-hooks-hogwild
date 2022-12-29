import React from "react";
import HogCard from "./HogCard";

function HogList({ hogs }) {

    function hideHog()

    const hogArray = hogs.map(hog => {
        return <HogCard key={ hog.name } hog={ hog } hideHog={ hideHog }/>
    })
    return (
        <div className="ui grid container">
            { hogArray }
        </div>
    )
};

export default HogList;