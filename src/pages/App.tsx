import { useState } from 'react';

function App() {

	const fetchTest = async () => {
		const result = await fetch(`/api/test`);
		let data = await result.text();
		console.log(data);
	}

	fetchTest();

	return <div>hello world</div>;
}

export default App;
