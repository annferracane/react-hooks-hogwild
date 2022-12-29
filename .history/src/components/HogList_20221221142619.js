import react from "React";
import HogCard from "./HogCard";

function HogList({ hogs }) {

    const hogArray = hogs.map(hog => {
        <HogCard key={ hog.name } hog={ hog }/>
    })
    return (
        
    )
};

export default HogList;