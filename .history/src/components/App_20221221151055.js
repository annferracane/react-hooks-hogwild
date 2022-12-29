import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import HogList from "./HogList";
import hogs from "../porkers_data";

const [displayHogs, setDisplayHogs] = useState(hogs);

function App() {
	return (
		<div className="App">
			<Nav />
			<Filter />
			<HogList hogs={ displayHogs }/>
		</div>
	);
}

export default App;
