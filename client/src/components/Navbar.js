import React from 'react';
import { Link } from 'react-router-dom';

//styles
import './Navbar.css';

function Navbar() {
	return (
		<nav className='navbar'>
			<ul>
				<li className='logo'>
					<Link to='/'>
						<h1>JH</h1>
					</Link>
				</li>
				<li>
					<Link to='/about'>
						<span>01.</span>About
					</Link>
				</li>
				<li>
					<Link to='/projects'>
						<span>02.</span>Projects
					</Link>
				</li>

				<li>
					<a
						href='https://drive.google.com/file/d/1jbeHE5qYxWmL1CXbRIayN6GthQoK3pv-/view?usp=sharing'
						target='_blank'
						rel='noreferrer noopener'
					>
						<span>03.</span>
						Resume
					</a>
				</li>
				<li>
					<a
						href='https://jdhawks.myportfolio.com/'
						target='_blank'
						rel='noreferrer noopener'
					>
						<span>04.</span>
						Adobe Portfolio
					</a>
				</li>

				<li>
					<Link to='/contact'>
						<span>05.</span>Contact
					</Link>
				</li>
				{/* <li>
					<button className='btn'>Test</button>
				</li> */}
			</ul>
		</nav>
	);
}

export default Navbar;
