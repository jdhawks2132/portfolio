import React from 'react';

import './ProjectCard.scss';

function ProjectCard({ project }) {
	const { name, stack, desc, deployed, git, img } = project;
	return (
		<div className='project-card-content'>
			<img src={img} alt={name} />
			<p className='project-name'>{name}</p>
			<p className='stack'>{stack}</p>
			<br />
			<p className='desc'>{desc}</p>
			<div className='buttons'>
				<a href={deployed} target='_blank' rel='noreferrer noopener'>
					<button className='btn'>Site</button>
				</a>
				<a href={git} target='_blank' rel='noreferrer noopener'>
					<button className='btn'>Code</button>
				</a>
			</div>
		</div>
	);
}

export default ProjectCard;
