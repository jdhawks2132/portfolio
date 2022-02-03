import React from 'react';
import Connect from '../../assets/connect.svg';
import LinkedIn from '../../assets/linkedin.svg';
import GitHub from '../../assets/github.svg';
import Email from '../../assets/email.svg';

//styles
import './Contact.scss';

function Contact() {
	return (
		<div className='connect-section-header'>
			<img id='connect' src={Connect} alt='' className='connect' />
			<div className='connect-card'>
				<h1 className='secondary'>Joshua Hawks</h1>
				<h2 className='tertiary'>Full-Stack Developer</h2>
				<div className='connect-btns'>
					<a
						href='https://www.linkedin.com/in/joshuahawks1/'
						target='_blank'
						rel='noreferrer noopener'
					>
						<img src={LinkedIn} alt='linkedin button' />
					</a>
					<a
						href='https://github.com/jdhawks2132'
						target='_blank'
						rel='noreferrer noopener'
					>
						<img src={GitHub} alt='github button' />
					</a>
					<a
						href='mailto: jdhawks@gmail.com'
						target='_blank'
						rel='noreferrer noopener'
					>
						<img src={Email} alt='email button' />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Contact;
