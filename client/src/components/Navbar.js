import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/Logo.svg';

//styles
import './Navbar.scss';

function Navbar() {
	return (
		<nav className='navbar'>
			<ul>
				<li className='logo'>
					<img src={Logo} alt='logo' />
				</li>
				<li>
					<Link to='about' smooth={true} duration={1000}>
						<span>01.</span>About
					</Link>
				</li>
				<li>
					<Link to='projects' smooth={true} duration={1000}>
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
						Design
					</a>
				</li>
				<li>
					<Link to='contact' smooth={true} duration={1000}>
						<span>05.</span>Connect
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
