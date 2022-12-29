import React from "react"; 

function Filter() {
    return (
        <div className="filterWrapper">
            <input type="text"></input>
            <select value="All">
                <option value="All">All</option>
                <option value="Greased">Greased</option>
                <option value="Not Greased">Not Greased</option>
            </select>
        </div>
    )
}

export default Filter;