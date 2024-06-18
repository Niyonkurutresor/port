// import { z } from 'zod';
// export const singupScheama = z.object({
// 	name: z
// 		.string({ required_error: 'Name is required.' })
// 		.min(1, { message: 'Name cannot be empty' })
// 		.max(64)
// 		.trim(),
// 	email: z.string({ required_error: 'email is reqired' }).email(),
// 	location: z.string().min(1, { message: 'Address cannot be empty' }),
// 	password: z
// 		.string({ required_error: 'Password is reqired' })
// 		.min(8, { message: 'Password must be at least 8 characters long' })
// 		.max(50, { message: 'Password cannot be longer than 50 characters' }),
// 	confirmPassword: z
// 		.string({ required_error: 'confirm password is reqired' })
// 		.min(8, { message: 'Password confirm must be at least 8 characters long' })
// 		.max(50, { message: 'Password cannot be longer than 50 characters' }),
// 	term: z.enum(['on'])
// });
