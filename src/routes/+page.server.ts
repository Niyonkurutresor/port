// import { db } from '$lib/db.server';
// import { contactMeSchema } from '$lib/schema/contactMe';
// import { error, fail, type Actions, type ServerLoad } from '@sveltejs/kit';
// import { zod } from 'sveltekit-superforms/adapters';
// import { superValidate } from 'sveltekit-superforms/server';

// const Projects = [
// 	{
// 		title: 'first project',
// 		description:
// 			'this project is an ecommerce project that should help user to levelup the working conditions',
// 		picture: 'https://cloudinary/niyonkuru/iejf2302ruw/i3jfsr2984832',
// 		ratings: 5
// 	}
// ];

// export const load: ServerLoad = async (event) => {
// 	const form = await superValidate(event, zod(contactMeSchema), { id: '' });
// 	return {
// 		Projects,
// 		form
// 	};
// };

// export const actions: Actions = {
// 	contact: async ({ request }) => {
// 		const form = await superValidate(request, zod(contactMeSchema), { id: 'contact' });
// 		if (!form.valid) {
// 			return fail(400, { form });
// 		}
// 		const { name, email, message } = form.data;
// 		try {
// 			const contact = await db.contactMe.create({
// 				data: {
// 					name: name,
// 					email: email,
// 					message: message
// 				}
// 			});

// 			if (!contact) throw error(400, 'Failed to create message.');
// 			return {
// 				projects: form,
// 				success: true,
// 				message: contact
// 			};
// 		} catch (error) {
// 			console.log(error);
// 			return fail(500, { message: 'Internal Server Error' });
// 		}
// 	}
// };
