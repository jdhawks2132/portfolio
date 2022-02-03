import './App.scss';

import { useEffect, useState } from 'react';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import About from './pages/about/About';
import Navbar from './components/Navbar';
import Contact from './pages/contact/Contact';
import Skills from './pages/skills/Skills';

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('/api/projects')
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);
	console.log(data);
	return (
		<div className='app'>
			<Navbar />
			<div className='container'>
				<Home />
				<About />
				<Projects projects={data} />
				<Skills />
				<Contact />
			</div>
		</div>
	);
}

export default App;
