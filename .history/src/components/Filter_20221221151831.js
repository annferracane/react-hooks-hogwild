import React, { useState }from "react"; 

function Filter() {
    const [filterVal, setFilterVal] = useState("All");

    function handleChange(e) {
        setFilterVal(e.target.value);

    }

    return (
        <div className="filterWrapper">
            <label>Filter Hogs:</label>
            <select value={ filterVal } onChange={ handleChange }>
                <option value="All">All</option>
                <option value="Greased">Greased</option>
                <option value="Not Greased">Not Greased</option>
            </select>
        </div>
    )
}

export default Filter;