// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user?: {
				id: string;
				name: string;
				email: string;
				location?: string;
			};
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface ProjectAttributes {
			title: string;
			picture: string;
			descriptin: string;
			lating: number;
		}
	}
}

export {};
