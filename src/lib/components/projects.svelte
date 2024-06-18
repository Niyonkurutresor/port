<script>
	import ProjectCard from './projectCard.svelte';
	import Shaka from '$lib/assets/shaka.png';
	import CommunicationChanne from '$lib/assets/scec.png';
	import Sabboath from '$lib/assets/sbt.png';
	import Shoping from '$lib/assets/shoping.png';
	export let Projects = [
		{
			title: 'Shaka',
			picture: Shaka,
			description:
				'Cutting-edge e-commerce platform offering diverse products, seamless navigation, and secure transactions for a superior shopping experience.',
			ratings: 4.5,
			tags: [],
			liveLink: 'https://shaka.rw'
			// codeLink: 'https://github.com/example/project1'
		},
		{
			title: 'SCEC',
			picture: CommunicationChanne,
			description:
				"University of Rwanda's centralized communication channel facilitates seamless interaction between students and administration for enhanced collaboration and continual content expansion.",
			ratings: 4.2,
			tags: ['React.js', 'Express', 'PostgreSQL'],
			liveLink: 'https://scec-fn.vercel.app/',
			codeLink: 'https://github.com/Niyonkurutresor/scec-bn'
		},
		{
			title: 'Sabboath',
			picture: Sabboath,
			description:
				'Sabboath stands as a regional leader in business and risk consulting, boasting a seasoned team adept in management, finance, operations, strategy, and governance. Highly skilled professionals deliver tailored solutions, offering invaluable insights to address a diverse array of critical business challenges.',
			ratings: 4.8,
			tags: ['Vie', 'Express', 'Prisma'],
			liveLink: 'https://sbrc-fn-two.vercel.app/'
		},
		{
			title: 'Smart neist',
			picture: Shoping,
			description: 'This is the description of Project 4.',
			ratings: 4.3,
			tags: ['Next js', 'PostgreSQL']
			// liveLink: 'https://example.com/project4',
			// codeLink: 'https://github.com/example/project4'
		}
		// {
		// 	title: 'Project 5',
		// 	picture: 'project5.jpg',
		// 	description: 'This is the description of Project 5.',
		// 	ratings: 4.6,
		// 	tags: ['Vue.js', 'Express', 'MongoDB'],
		// 	liveLink: 'https://example.com/project5',
		// 	codeLink: 'https://github.com/example/project5'
		// },
		// {
		// 	title: 'Project 6',
		// 	picture: 'project6.jpg',
		// 	description: 'This is the description of Project 6.',
		// 	ratings: 4.7,
		// 	tags: ['Angular', 'Laravel', 'MySQL'],
		// 	liveLink: 'https://example.com/project6',
		// 	codeLink: 'https://github.com/example/project6'
		// },
		// {
		// 	title: 'Project 7',
		// 	picture: 'project7.jpg',
		// 	description: 'This is the description of Project 7.',
		// 	ratings: 4.9,
		// 	tags: ['React', 'Django', 'PostgreSQL'],
		// 	liveLink: 'https://example.com/project7',
		// 	codeLink: 'https://github.com/example/project7'
		// }
	];

	let showMoreProjects = false;
	const maxProjects = 4;
</script>

<section class=" z-10 mt-[10vh] lg:mt-[15vh] w-full" id="projects">
	<div class="mt-[10vh] w-full">
		<h1 class="text-4xl xl:text-6xl font-bold w-fit mx-auto mb-8">Projects</h1>
		<div class="px-8 py-8 w-full bg-gradient-to-tr">
			<div class="w-full mx-auto text-center">
				<p class="text-lg">
					Here's a selection of the projects I've worked on, showcasing my expertise in creating
					innovative and user-friendly software solutions.
				</p>
				<!-- projects -->
				<div class=" flex flex-wrap gap-1 justify-center md:gap-12 lg:gap-1 lg:justify-start mt-4">
					{#each Projects.slice(0, showMoreProjects ? Projects.length : maxProjects) as project}
						<ProjectCard cardData={project} />
					{:else}
						<p>No projects to display.</p>
					{/each}
				</div>
				{#if Projects.length > maxProjects}
					<button
						class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full focus:outline-none mt-4 focus:ring-2 focus:ring-blue-400"
						on:click={() => (showMoreProjects = !showMoreProjects)}
					>
						{showMoreProjects ? 'Show Less' : 'View More'}
					</button>
				{/if}
			</div>
		</div>
	</div>
</section>
