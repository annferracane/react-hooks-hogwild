import React, { useState } from "react";
import HogCard from "./HogCard";

function HogList({ hogs }) {
    const

    function hideHog(hogName) {
        


    }

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