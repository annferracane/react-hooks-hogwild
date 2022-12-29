import React, { useState }from "react"; 

function Filter() {
    const [filterVal, setFilterVal] = useState("All");

    

    return (
        <div className="filterWrapper">
            <label>Filter Hogs:</label>
            <select value={ filterVal } onChange={(e) => setFilterVal(e.target.value)}>
                <option value="All">All</option>
                <option value="Greased">Greased</option>
                <option value="Not Greased">Not Greased</option>
            </select>
        </div>
    )
}

export default Filter;