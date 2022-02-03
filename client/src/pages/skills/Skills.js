import React from 'react';
import './Skills.scss';
import SkillsLogo from '../../assets/skills.svg';
import SkillsList from '../../assets/skillslist.svg';

function Skills() {
	return (
		<div className='skills-section'>
			<div className='skills-section-header'>
				<img id='skills' src={SkillsLogo} alt='skill list logo' />
				<img id='skillz' src={SkillsList} alt='skill list' />
			</div>
			<div className='skill-list'></div>
		</div>
	);
}

export default Skills;
