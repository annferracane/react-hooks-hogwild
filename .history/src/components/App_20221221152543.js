import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import HogList from "./HogList";
import hogs from "../porkers_data";


function App() {

	const [displayHogs, setDisplayHogs] = useState(hogs);

	function filterHogs(filterVal) {
		const newHogs = [...hogs];
		let filteredHogs = []

		if(filterVal === "Greased") {
			const filteredHogs = newHogs.filter(hog => hog.greased === true);
		} else if (filterVal === "Not Greased")

		

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
