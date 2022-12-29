import React, { useState }from "react"; 

function Filter({ filterHogs }) {
    const [filterVal, setFilterVal] = useState("All");

    function handleChange(e) {
        setFilterVal(e.target.value);
        filterHogs(e.target.value);
    }

    return (
        <div className="filterWrapper">
            <strong>Sort by:</strong>
            <label>
                <input
                type="radio"
                value="Name"
                name="sort"
                checked={ alphChecked }
                onChange={ sortHandler }
                />
                Name
            </label>
            <label>
                <input
                type="radio"
                value="Weight"
                name="sort"
                checked={ pricChecked }
                onChange={ sortHandler }
                />
                Weight
            </label>
            <br />
            <label>
            <strong>Filter Hogs:</strong>
                <select value={ filterVal } onChange={ handleChange }>
                    <option value="All">All</option>
                    <option value="Greased">Greased</option>
                    <option value="Not Greased">Not Greased</option>
                </select>
            </label>
        </div>
    )
}

export default Filter;