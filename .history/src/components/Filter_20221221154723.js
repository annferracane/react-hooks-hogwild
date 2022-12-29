import React, { useState }from "react"; 

function Filter({ filterHogs }) {
    const [filterVal, setFilterVal] = useState("All");
    const [nameChecked, setNameChecked] = useState(false);
    const [weightChecked, setWeightChecked] = useState(false);

    function handleChange(e) {
        setFilterVal(e.target.value);
        filterHogs(e.target.value);
    }

    function sortHandler(e) {
        const val = e.target.value;
        if(val === "Name"){

        } else {
            
        }
    }

    return (
        <div className="filterWrapper">
            <strong>Sort by:</strong>
            <label>
                <input
                type="radio"
                value="Name"
                name="sort"
                checked={ nameChecked }
                onChange={ sortHandler }
                />
                Name
            </label>
            <label>
                <input
                type="radio"
                value="Weight"
                name="sort"
                checked={ weightChecked }
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