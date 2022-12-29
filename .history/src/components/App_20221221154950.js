import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import HogList from "./HogList";
import hogs from "../porkers_data";


function App() {

	const [displayHogs, setDisplayHogs] = useState(hogs);

	function filterHogs(filterVal) {
		
		const newHogs = [...hogs];

		if(filterVal === "Greased") {
			const greasedHogs = newHogs.filter(hog => hog.greased === true);
			setDisplayHogs(greasedHogs);
		} else if (filterVal === "Not Greased") {
			const nonGreasedHogs = newHogs.filter(hog => hog.greased === false);
			setDisplayHogs(nonGreasedHogs);
		} else {
			setDisplayHogs(newHogs);
		}
	}

	function sortHogs(val) {
		const sortedHogs = [...hogs];

		if(val === "Name") {
			newStocks.sort((a, b) => a.name > b.name ? 1 : -1);

		} else {

		}

	}

	return (
		<div className="App">
			<Nav />
			<Filter filterHogs={ filterHogs } sortHogs={ sortHogs } />
			<HogList hogs={ displayHogs }/>
		</div>
	);
}

export default App;
