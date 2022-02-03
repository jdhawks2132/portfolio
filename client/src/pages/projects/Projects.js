import React from 'react';
import ProjectLogo from '../../assets/projects.svg';
import ProjectCard from '../../components/ProjectCard';

//styles
import './Projects.scss';

const projects = [
	{
		id: 1,
		img: 'https://lh3.googleusercontent.com/1lBLWD4S77rvFihuwFdZ2e1dbFpEYBNmee1HpGv2f9cihtDDhgu5-r14HXMYX66-ysENy6NmkDk1WMeT8cK29Ve0iK0CfX4YzFaos61jGcRTRWQzmDoRjTh2xenO35PAbawVpL0qNu2RqCI7SMqLTSqQn1I7n78ecSO3_BQdilKsAbm6OSFeqWSCNv11uh6b93c1TnyA7vl-0Ww8LULTiVFuxxJgMwtjzL7A1JXo08O82vPVYnTseV9rAMxjne4-E1T3Mi_oNLOlw84LNwL5vNxVnFeeiSRpgLr4M5vfxowTDl4lECwIdn-xyQEdD4-AduRiNntIknypk6rM5CmcI_9h55vD5aCTACZoC5xGov3XltzL4rOPXH1PWioeoj-jcOGre7zxv7sp-B-aWfNfawWrKk-ySXyj57vgTx6w9WLInzhghNYtn3eGQi8oYsUHZmSqnogMcj_KtgSruNmXK8VAiiE9Z5NVrUldM9pIOua_W6M-p_4so8ZgikjYA590maunwDVRFY8k77tTNCIBYyOZQM8wLQTDQDBWe6VnNlUm7c-8Uz0RiMgoqq59lDZ4mHIUVhh8VL8CacoWl8MgmnlvBGL8BLW1gvR02nz62Z0Lmgfz5v9tRi5kOMzXOTCM-irEyphR7HQPl5L-Lhas0pDHM9GWEwUYBuoBcWRq43ld1fGswofEpePhLh6f12L1mHz5p2025EolKStiZfh3pegq=w1111-h695-no?authuser=0',
		name: 'BassoonGuru',
		stack: 'ReactJS | Ruby on Rails | Redux',
		desc: 'Learning platform that curates video-based curriculum and student comments.',
		deployed: 'https://bassoonguru.herokuapp.com/',
		git: 'https://github.com/jdhawks2132/bassoonguru',
	},
	{
		id: 2,
		img: 'https://lh3.googleusercontent.com/rrtjWDAgRcK5VRSYl_9p1zqipBmmDuFbvkRta0qVDvP5qZFYXWU9y_D4fv7nKWC-RoiXxb_S254NUnaal1EcCQ9D5k6-PVmsuOuP3SBjzQ_T9C80OEbpxPI54W_FOIkTM1ZpsQ_BEqDvwbQ8YoUCTRbIEnx_j69oGrrVS1DgjvsFDymAiIHiv4yemdib36f7JgP5j4wktvs0nWV1FTRShAuv0IJkD3kfKrhkJ6nHhi0mwm_X5hu36HC-btS13N_dF77ZvdI2ENxjc0s1IPbn7I5_6Pge2ZbDgZUL9I4YZk4VCBmx4nwIIyG0QVKjyp1Rhq7H4Ib081U50TlMvHaRO5JiUhi-uRW_Xo95GZCrbHc8pIPTPt4vpHuFPbjWpLieU19WMdQm06m-5q9H9XwNQfNNT3hfJiw4uisIjHLvpfm0WF6Go_XundTccLRzi9o63w0jU687COm7Sal76_scNS53aGsVBEucZH-zjGlX8b5RZds30pii0Xplsfgq82MRbU_F9hXJ4BExBrBnvdhlqY1hYff-Vu8hIhWuVgmkD1eOMSauRGLc_ZnkBprPkv0m-5XrIqu-kTN5tSBZLqKZiayoBF0VrCpHTIuepcvWLDd_pQc5CypeUuM0bWRUcyE2NTQEko00FMfn4KkH_BjDyCuEegozG2j3uKmupJ6yn3fYCmqbJZvu8H5wDsRISo6yHCnBSm9SoyS_hdAXRlEwmrGt=w1111-h695-no?authuser=0',
		name: '//FIS-Assist',
		stack: 'ReactJS | Google Firebase',
		desc: 'Project Management App that allows users to login, ask questions, and communicate via chat',
		deployed: 'https://hawksnest-c3df1.firebaseapp.com/',
		git: 'https://github.com/jdhawks2132/ProjectManagementApp',
	},
	{
		id: 3,
		img: 'https://lh3.googleusercontent.com/qxLPowigdid4w3sYM2nkM-jP8XHkc_XE8YGQ2b0vwxXyViCP0PFe25tQQtBa1OZ0HuZcHCaFyHv1BscMiCYrftELVCgcjLMJ6sGE86AbKwuAdtrttDcyPEZFzBrjEQPWvK5l7XkLHuwfv5DMWN9_lsCrnT2YQ46V55nJVMqE-JN0p7n0o-WYgWHE6zCWqHD02hPFfZGWSCMCl-r-rMQK9bWeD6UbYvVQYhIMen7CPs3jrpIGN_B2F_oopwg7sLQEJnm_ULh-tSgqEGdPOUibW7l0ohsXMvfaeF9Nl3Ftm8mYG0lMpJbdM_PV_I-VZ7fLahAygat0GHo-ghE5GO-AGY3GNT-aBdAy9M7JF-0ctqoz4FbFeO222xLSZ3SMiEOC_d8YlmffgpIFlTAGpPY64nrpS1FrtMoNQxUWRG-1fGGGOvQqqzWOzfWsM76Qb-ulx9DYo8LjdMDIv1YgrPMHPjFbVm1yIhPncF4ayCzKgmZuXo5lpi_UlsKG_XFGJUfsGtIIXNscWeE723AQVcdE5uWgB-L_6SCqm8cI82c-Lv6VQj34-_qQRF4h9huWUCvKc1f1Gw76i8VzjzY4bxAsuKMxcKcttxO39ml9dyCevmKkUjTxLXcM914G5CbLYIncBFsIp2_9c9uk0AffsOLmHNF8NzyLUeX1AF7CuLgieJH50YwXxgPAaJtIQsDHjj6hBVsL3G8YBPhjAC0Wfj0qA1jS=w1280-h800-no?authuser=0',
		name: 'Escapade',
		stack: 'ReactJS | JavaScript JSON Server',
		desc: 'South American Travel application that offers users adventure-based vacation excursions',
		deployed: 'https://jdhawks2132.github.io/escapade/',
		git: 'https://github.com/jdhawks2132/escapade',
	},
];

function Projects() {
	const projectList = projects.map((project) => (
		<ProjectCard key={project.id} project={project} />
	));
	return (
		<div id='projects'>
			<div className='projects-section-header'>
				<img src={ProjectLogo} alt='project logo' />
			</div>
			<div className='project-card'>{projectList}</div>
		</div>
	);
}

export default Projects;
