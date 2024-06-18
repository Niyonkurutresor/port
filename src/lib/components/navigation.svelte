<script lang="ts">
	import { page } from '$app/stores';
	import { MenuIcon, XIcon } from 'svelte-feather-icons';

	const scrollToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};
	$: menuOpen = false;
	function toggleNavigation(state: boolean) {
		menuOpen = !state;
	}
	$: Them = $page.data.Them;
</script>

<nav class=" h-fit md:flex md:flex-row md:justify-between w-[45%] mr-8 min-w-fit mt-2">
	<button on:click={() => toggleNavigation(menuOpen)} class="float-right md:hidden">
		<MenuIcon class={`text-orange-300 text-3xl    ${menuOpen ? ' hidden' : 'block'}`} />
	</button>
	<button on:click={() => toggleNavigation(menuOpen)} class="float-right md:hidden">
		<XIcon class={` text-orange-300 float-right ${menuOpen ? ' block' : 'hidden'}`} />
	</button>
	<ul
		class={` ${menuOpen ? ' block bg-black' : 'hidden'} md:flex w-full flex flex-col md:flex-row  rounded-lg md:bg-none py-6 md:py-0 justify-between gap-2 min-w-fit font-semibold items-center`}
	>
		<a href="#home" on:click={() => scrollToSection('top')}>
			<li class=" hover:text-orange-300">Home</li>
		</a>
		<a href="#about" on:click={() => scrollToSection('about')}>
			<li class=" hover:text-orange-300">About</li>
		</a>
		<a href="#projects" on:click={() => scrollToSection('projects')}>
			<li class=" hover:text-orange-300">Projects</li>
		</a>
		<!-- <a href="#contact" on:click={() => scrollToSection('contact')}>
			<li class=" hover:text-orange-300">Contact</li>
		</a> -->
	</ul>

	<!-- <div class=" flex gap-4 text-lg font-semibold">
		<a
			href="/login"
			class=" w-fit px-4 py-1 border-orange-300 border-[2px] rounded-lg hover:bg-gradient-to-tl hover:from-orange-300 hover:to-orange-400 transform transition duration-300"
		>
			Sign in
		</a>

		<Button>Hire me</Button>
	</div> -->
</nav>
