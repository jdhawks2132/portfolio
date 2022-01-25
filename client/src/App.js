import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import About from './pages/about/About';
import Navbar from './components/Navbar';
import Contact from './pages/contact/Contact';

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
			<BrowserRouter>
				<Navbar />
				<div className='container'>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/projects'>
							<Projects />
						</Route>
						<Route path='/about'>
							<About />
						</Route>
						<Route path='/contact'>
							<Contact />
						</Route>
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
