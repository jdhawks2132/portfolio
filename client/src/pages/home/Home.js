import React from 'react';
import Laptop from '../../assets/laptop.svg';
import Chevron from '../../assets/chevron.svg';

//styles
import './Home.scss';

function Home() {
	return (
		<div className='home'>
			<img id='laptop' src={Laptop} alt='lap top intro' />
			<img id='chevron' src={Chevron} alt='chevron' />
		</div>
	);
}

export default Home;
