import React, { useState, useEffect } from 'react'
import Header from './header/header'
import ActionAreaCard from './card/card'

function App() {
	const [data, setData] = useState([])

	useEffect(() => {
		fetch('https://www.travel-advisory.info/api')
			.then(response => response.json())
			.then(data => setData(data.data))
	}, [])

	useEffect(() => {
		console.log(data);
	  }, [data]);

	return (
		<div className="App">
			<Header />
			<ActionAreaCard />
		</div>
	)
}

export default App
