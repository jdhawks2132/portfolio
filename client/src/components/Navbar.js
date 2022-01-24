import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
//styles
import './Navbar.css';

function Navbar() {
	return (
		<nav className='navbar'>
			<ul>
				<li className='logo'>
					<img src={Logo} alt='logo' />
					<Link to='/'>
						<h1>Joshua Hawks</h1>
					</Link>
				</li>
				<li>
					<Link to='/projects'>Projects</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<a
						href='https://drive.google.com/file/d/1jbeHE5qYxWmL1CXbRIayN6GthQoK3pv-/view?usp=sharing'
						target='_blank'
						rel='noreferrer noopener'
					>
						Resume
					</a>
				</li>
				<li>
					<a
						href='https://jdhawks.myportfolio.com/'
						target='_blank'
						rel='noreferrer noopener'
					>
						Adobe Portfolio
					</a>
				</li>

				<li>
					<Link to='/contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
