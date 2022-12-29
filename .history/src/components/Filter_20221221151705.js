import React, { useState }from "react"; 

function Filter() {
    
    return (
        <div className="filterWrapper">
            <label>Filter Hogs:</label>
            <select value={ filterVal }>
                <option value="All">All</option>
                <option value="Greased">Greased</option>
                <option value="Not Greased">Not Greased</option>
            </select>
        </div>
    )
}

export default Filter;