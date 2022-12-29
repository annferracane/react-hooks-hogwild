import React from "react"; 

function Filter() {
    return (
        <div className="filterWrapper">
            <select value="All">
                <option value="All">Orange</option>
                <option value="Greased">Radish</option>
                <option value="Cherry">Cherry</option>
            </select>
        </div>
    )
}

export default Filter;