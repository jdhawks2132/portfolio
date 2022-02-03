import React from 'react';
import Connect from '../../assets/connect.svg';

//styles
import './Contact.scss';

function Contact() {
	return (
		<div className='connect-section-header'>
			<img id='connect' src={Connect} alt='' className='connect' />
			<div className='connect-card'></div>
		</div>
	);
}

export default Contact;
