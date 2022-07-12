import React, { useState, useEffect } from 'react'
import Header from './header/header'

function App() {
	const [data, setData] = useState([])

	useEffect(() => {
		fetch('https://randomuser.me/api?results=25')
			.then(response => response.json())
			.then(data => setData(data.results))
	}, [])

	return (
		<div className="App">
			<Header />
		</div>
	)
}

export default App
