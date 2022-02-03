import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/Logo.svg';

//styles
import './Navbar.scss';

function Navbar() {
	const handleClick = () => {
		window.scrollTo(0, 0);
	};
	return (
		<nav className='navbar'>
			<ul>
				<li className='logo'>
					<img onClick={handleClick} src={Logo} alt='logo' />
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
					<Link to='skills' smooth={true} duration={1000}>
						<span>03.</span>Skills
					</Link>
				</li>
				<li>
					<Link to='connect' smooth={true} duration={1000}>
						<span>04.</span>Connect
					</Link>
				</li>
				<li>
					<a
						href='https://medium.com/@jdhawks'
						target='_blank'
						rel='noreferrer noopener'
					>
						<span>05.</span>Blog
					</a>
				</li>
				<li>
					<a
						href='https://drive.google.com/file/d/1jbeHE5qYxWmL1CXbRIayN6GthQoK3pv-/view?usp=sharing'
						target='_blank'
						rel='noreferrer noopener'
					>
						<button className='btn'>Resume</button>
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
