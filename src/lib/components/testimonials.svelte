<script>
	import { fly } from 'svelte/transition';

	// Assuming you have an array of testimonial data
	export let Testimonials = [
		{
			name: 'John Doe',
			position: 'CEO, Acme Corp',
			message:
				'Working with Niyonkuru was a game-changer for our business. Their technical expertise and attention to detail helped us deliver a cutting-edge web application that has transformed our operations.'
		},
		{
			name: 'Jane Smith',
			position: 'CTO, Tech Innovations',
			message:
				'Niyonkuru Tresor is a true professional and a pleasure to work with. They consistently exceeded our expectations and delivered high-quality solutions that have had a significant impact on our company.'
		},
		{
			name: 'Michael Johnson',
			position: 'Project Manager, Startup Ventures',
			message:
				"I can't recommend Tresor enough. Their ability to understand our requirements and translate them into functional, user-friendly applications is truly impressive. They are a valuable asset to any team."
		},
		{
			name: 'Emily Brown',
			position: 'CEO, Innovative Solutions',
			message:
				'Tresor is a rare find - a developer who combines technical expertise with a deep understanding of business needs. They have played a crucial role in the success of our latest project.'
		}
	];

	let currentIndex = 0;
	let testimonialWidth = 300;
	let containerWidth = 0;

	$: displayedTestimonials = [
		Testimonials[currentIndex],
		...Testimonials.slice(0, currentIndex),
		...Testimonials.slice(currentIndex + 1)
	];

	function moveToNextTestimonial() {
		currentIndex = (currentIndex + 1) % Testimonials.length;
	}

	$: if (containerWidth >= testimonialWidth * Testimonials.length) {
		setInterval(moveToNextTestimonial, 5000);
	}
</script>

<section bind:clientWidth={containerWidth} class="mt-[10vh] lg:mt-[15vh] w-full">
	<div class="mt-[10vh] w-full">
		<h1 class="text-4xl xl:text-6xl font-bold w-fit mx-auto mb-8">Testimonials</h1>
		<div
			class="px-8 py-8 w-full bg-gradient-to-tr from-blue-500 to-blue-300 text-white rounded-lg shadow-lg overflow-hidden"
		>
			<div class="w-full mx-auto text-center">
				<div class="flex items-center justify-center gap-8 animate-scroll">
					{#each displayedTestimonials as testimonial (testimonial.name)}
						<div
							class="testimonial-card p-6 rounded-lg bg-blue-400 shadow-lg w-[300px] shrink-0"
							in:fly={{ x: 500, duration: 1000 }}
							out:fly={{ x: -500, duration: 1000 }}
						>
							<p class="text-lg font-semibold">{testimonial.message}</p>
							<div class="mt-4">
								<h3 class="text-xl font-bold">{testimonial.name}</h3>
								<p class="text-blue-200">{testimonial.position}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	.animate-scroll {
		animation: scroll 30s linear infinite;
	}
</style>
