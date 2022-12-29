import React, { useState } from "react";
import HogCard from "./HogCard";

function HogList({ hogs, hideHog }) {
    const [hogList, setHogList] = useState(hogs);

    function hideHog(hogName) {
        const newHogList = hogList.filter(hog => hog.name !== hogName);
        setHogList(newHogList);
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