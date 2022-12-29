import react from "React";
import HogCard from "./HogCard";

function HogList({ hogs }) {

    const hogArray = hogs.map(hog => {
        <HogCard key={ hog.name } hog={ hog }/>
    })
    return (
        <div>
            { hogArray }
        <div/>
    )
};

export default HogList;