<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { writable } from 'svelte/store';

	export let words: string[] = [];
	export let typeSpeed = 120;
	export let deleteSpeed = 80;
	export let loop = true;

	let text = writable('');
	let cursorVisible = writable(true);
	let currentWordIndex = 0;
	let currentCharIndex = 0;
	let isDeleting = false;

	const type = async () => {
		while (true) {
			const currentWord = words[currentWordIndex];

			if (isDeleting) {
				currentCharIndex--;
				if (currentCharIndex < 0) {
					isDeleting = false;
					currentWordIndex = (currentWordIndex + 1) % words.length;
				}
			} else {
				currentCharIndex++;
				if (currentCharIndex > currentWord.length) {
					isDeleting = true;
					await new Promise((resolve) => setTimeout(resolve, 2000)); // Pause before deleting
				}
			}

			text.set(currentWord.slice(0, currentCharIndex));
			await tick();
			await new Promise((resolve) => setTimeout(resolve, isDeleting ? deleteSpeed : typeSpeed));
		}
	};

	const blinkCursor = async () => {
		while (true) {
			cursorVisible.set(true);
			await new Promise((resolve) => setTimeout(resolve, 500));
			cursorVisible.set(false);
			await new Promise((resolve) => setTimeout(resolve, 500));
		}
	};

	onMount(() => {
		type();
		blinkCursor();
	});
</script>

<span>{$text}</span><span
	class="cursor"
	style="visibility: {$cursorVisible ? 'visible' : 'hidden'};">|</span
>

<style>
	.cursor {
		display: inline-block;
		width: 2px;
		margin-left: 2px;
		background-color: black;
		animation: blink 1s step-end infinite;
	}

	@keyframes blink {
		from,
		to {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		70% {
			opacity: 0;
		}
	}
</style>
