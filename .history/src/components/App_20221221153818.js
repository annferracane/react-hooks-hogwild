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
			console.log("Greased");
			const greasedHogs = filteredHogs.filter(hog => hog.greased === true);
			console.log(greasedHogs);
		} else if (filterVal === "Not Greased") {
			console.log("Not Greased");
			const nongreasedHogs = filteredHogs.filter(hog => hog.greased === true);
			console.log(greasedHogs);
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
