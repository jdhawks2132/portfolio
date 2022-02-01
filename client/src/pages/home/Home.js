import React from 'react';
import GitHub from '../../assets/github-brands.svg';
import LinkedIn from '../../assets/linkedin-brands.svg';
//styles
import './Home.css';

function Home() {
	return (
		<div className='home'>
			<div className='left-side'>
				<a
					href='https://www.linkedin.com/in/joshuahawks1/'
					target='_blank'
					rel='noreferrer noopener'
				>
					<img src={LinkedIn} alt='linkedin-logo' />
				</a>
				<br />
				<p>|</p>
				<br />
				<a
					href='https://github.com/jdhawks2132'
					target='_blank'
					rel='noreferrer noopener'
				>
					<img src={GitHub} alt='github-logo' />
				</a>
			</div>
			<div className='intro-txt'>
				<p className='highlight'>Hi, my name is...</p>
				<h1 className='title'>Joshua Hawks</h1>
				<h2 className='secondary'>Full-stack Developer</h2>
				<p className='tertiary'>React | Ruby on Rails | Ruby | Redux</p>
			</div>
		</div>
	);
}

export default Home;
