import React, { useState, useEffect } from 'react'
import Header from './header/header'
import ActionAreaCard from './card/card'

function App() {
	const [data, setData] = useState([])

	useEffect(() => {
		fetch('https://api.mapbox.com/styles/v1/{username}/{style_id}')
			.then(response => response.json())
			.then(data => setData(data.results))
	}, [])

	return (
		<div className="App">
			<Header />
			<ActionAreaCard />
		</div>
	)
}

export default App
