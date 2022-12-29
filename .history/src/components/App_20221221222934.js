import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import HogList from "./HogList";
import AddHogForm from "./AddHogForm";
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
			sortedHogs.sort((a, b) => a.name > b.name ? 1 : -1);
		} else {
			sortedHogs.sort((a, b) => a.weight > b.weight ? -1 : 1);
		}
		setDisplayHogs(sortedHogs);
	}

	function addHog(hog) {
		const newHogs = [...setDisplayHogs, hog];
		//setDisplayHogs(newHogs);
	}

	return (
		<div className="App">
			<Nav />
			<Filter filterHogs={ filterHogs } sortHogs={ sortHogs } />
			<AddHogForm addHog={ addHog }/>
			<HogList hogs={ displayHogs }/>
		</div>
	);
}

export default App;
