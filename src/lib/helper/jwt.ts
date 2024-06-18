// import { promisify } from 'util';
// import JWT from 'jsonwebtoken';
// import { JWT_SECRET, JWT_EXPIRES_IN } from '$env/static/private';

// export const sign = async (payload: { id: string }) => {
// 	return await promisify(JWT.sign)(payload, JWT_SECRET, {
// 		expiresIn: JWT_EXPIRES_IN
// 	});
// };
// export const verify = async (payload: string) => await promisify(JWT.verify)(payload, JWT_SECRET);
