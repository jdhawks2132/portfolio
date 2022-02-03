import React from 'react';
import Mountains from '../assets/mountains.svg';

import './Footer.scss';

function Footer() {
	return (
		<div className='footer'>
			<img src={Mountains} alt='line art mountains' />
		</div>
	);
}

export default Footer;
