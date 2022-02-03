import React from 'react';
import Connect from '../../assets/connect.svg';

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
					<img src='' alt='' />
				</div>
			</div>
		</div>
	);
}

export default Contact;
