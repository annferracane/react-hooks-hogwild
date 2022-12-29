import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import HogList from "./HogList";
import AddHogForm from "./AddHogForm";
import hogs from "../porkers_data";


function App() {

	const [displayHogs, setDisplayHogs] = useState(hogs);
	const [totalHogs, setTotalHogs] = useState(hogs);
	const [hiddenHogs, setHiddenHogs] = useState([]);

	function filterHogs(filterVal) {
		
		const newHogs = [...hogs, ...addedHogs];
		newHogs.filter(hog => !hiddenHogs.includes(hog));

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
		const sortedHogs = [...hogs, ...addedHogs];
		sortedHogs.filter(hog => !hiddenHogs.includes(hog));

		if(val === "Name") {
			sortedHogs.sort((a, b) => a.name > b.name ? 1 : -1);
		} else {
			sortedHogs.sort((a, b) => a.weight > b.weight ? -1 : 1);
		}
		setDisplayHogs(sortedHogs);
	}

	function hideHog(hog) {
		

		const newHogList = totalHogs.filter(hog => hog.name !== hogName);

		const newHiddenHogs = [...hiddenHogs, hog];

		const newHogs = totalHogs.filter(hog => !hiddenHogs.includes(hog));

        
		setHiddenHogs(newHogList);

		const newHogs = [...hogs, ...addedHogs];
		newHogs.filter(hog => !hiddenHogs.includes(hog));
		
        setDisplayHogs(newHogs);
    }

	function addHog(hog) {
		
		const newHogs = [...totalHogs, hog];
		setTotalHogs(newHogs => {
			const hogsForDisplay = [...newHogs];
			hogsForDisplay.filter(hog => !hiddenHogs.includes(hog));
			setDisplayHogs(hogsForDisplay);
		});
	}

	return (
		<div className="App">
			<Nav />
			<Filter filterHogs={ filterHogs } sortHogs={ sortHogs } />
			<AddHogForm addHog={ addHog }/>
			<HogList hogs={ displayHogs } hideHog={ hideHog } />
		</div>
	);
}

export default App;
