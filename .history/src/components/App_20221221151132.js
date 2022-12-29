import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import HogList from "./HogList";
import hogs from "../porkers_data";


function App() {

	const [displayHogs, setDisplayHogs] = useState(hogs);

	return (
		<div className="App">
			<Nav />
			<Filter />
			<HogList hogs={ displayHogs }/>
		</div>
	);
}

export default App;
