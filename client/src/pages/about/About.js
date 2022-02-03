import React from 'react';
import AboutLogo from '../../assets/about.svg';

//styles
import './About.scss';

function About() {
	return (
		<div>
			<div className='section-header'>
				<img id='about' src={AboutLogo} alt='about section logo' />
			</div>
			<div className='about-content'>
				<p>
					Full-stack Software Engineer with a background in education and
					design. My 15+ years as a Band Director provides me with tools I use
					daily as a developer such as creativity, communication,
					resourcefulness, and grit. As a Full-stack Developer, I love the
					creative process behind design and problem solving.
				</p>
				<p>
					I am a freelance classical musician (oboe and bassoon) and graphic
					designer. I have designed everything from business cards to costumes
					for individuals and organizations. In my spare time, I enjoy hiking,
					biking, and playing softball.
				</p>
			</div>
		</div>
	);
}

export default About;
