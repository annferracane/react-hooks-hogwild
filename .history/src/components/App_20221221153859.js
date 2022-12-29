import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import HogList from "./HogList";
import hogs from "../porkers_data";


function App() {

	const [displayHogs, setDisplayHogs] = useState(hogs);

	function filterHogs(filterVal) {
		
		let filteredHogs = [...hogs];

		if(filterVal === "Greased") {
			const greasedHogs = filteredHogs.filter(hog => hog.greased === true);
			setDisplayHogs(greasedHogs);
		} else if (filterVal === "Not Greased") {
			const nonGreasedHogs = filteredHogs.filter(hog => hog.greased === false);
			setDisplayHogs(nonGreasedHogs);
		} 

		console.log(filteredHogs);

		setDisplayHogs(filteredHogs);
	}

	return (
		<div className="App">
			<Nav />
			<Filter filterHogs={ filterHogs }/>
			<HogList hogs={ displayHogs }/>
		</div>
	);
}

export default App;
