<script>
	import { ServerIcon } from 'svelte-feather-icons';
	import Button from './button.svelte';
</script>

<section class="mt-[10vh] lg:mt-[15vh] w-full">
	<div class="mt-[10vh] w-full">
		<h1 class="text-4xl xl:text-6xl font-bold w-fit mx-auto mb-8">Offerings</h1>
		<div class="px-8 py-8 w-full bg-gradient-to-tr rounded-lg">
			<div class="w-full mx-auto text-center">
				<p class="text-lg">
					As a skilled software developer, I specialize in crafting innovative solutions that drive
					real business impact. Let's collaborate to enhance your digital presence
				</p>
				<div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					<div class=" p-6 rounded-lg shadow-lg">
						<h2 class="text-2xl font-bold mb-4">Services</h2>
						<ul class="text-left">
							<li>Web Development</li>
							<li>Backend API Design</li>
							<li>Mobile App Development</li>
							<li>User Experience (UX) Design</li>
						</ul>
					</div>
					<div class=" p-6 rounded-lg shadow-lg">
						<h2 class="text-2xl font-bold mb-4">Expertise</h2>
						<ul class="text-left">
							<li>JavaScript, React, Vue, Svelte, Node.js</li>
							<li>Java, Spring Boot</li>
							<li>SQL and NoSQL Databases</li>
							<li>Responsive and Mobile-Friendly Design</li>
						</ul>
					</div>
					<div class=" p-6 rounded-lg shadow-lg">
						<h2 class="text-2xl font-bold mb-4">Engagement Models</h2>
						<ul class="text-left">
							<li>Fixed-Price Projects</li>
							<li>Hourly Consulting</li>
							<li>Dedicated Developer</li>
							<li>Flexible Retainer Services</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
