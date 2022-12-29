import react from "React";
import HogCard from "./HogCard";

function HogList({ hogs }) {

    const hogArray = hogs.map(hog => {
        <HogCard />
    })
    return (
        <>

        </>
    )
};

export default HogList;