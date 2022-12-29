import React from "react"; 

function Filter() {
    return (
        <div className="filterWrapper">
            <select value="All">
                <option value="All">Orange</option>
                <option value="Greased">Greased</option>
                <option value="Not Greased">Cherry</option>
            </select>
        </div>
    )
}

export default Filter;