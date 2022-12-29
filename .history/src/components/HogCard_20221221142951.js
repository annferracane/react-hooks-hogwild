import react from "React"; 

function HogCard({ hog }) {
    return (
        <div className="ui eight wide column">
            <img src={ hog.image }/>

        </div>
    )
};

export default HogCard;