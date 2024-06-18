import { type Handle, type HandleFetch } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const Authentication: Handle = async ({ event, resolve }) => {
	console.log('//is data reqest or is refreshing the page', event.isDataRequest);
	const { isDataRequest, url } = event;
	if (!isDataRequest && !url.pathname.startsWith('api')) {
		// is data request loges once we are fetching data with client
		// but you dont have to use it because once you are loggin in
		// you are using client side navigation.
		// then you are not goin to get updates.
	}
	const response = resolve(event);
	return response;
};

export const Authorization: Handle = async ({ event, resolve }) => {
	// const token = event.cookies.get('token');
	// if (!token) {
	// 	throw redirect(305, '/');
	// }
	// check the expiration and other staft to allowe user to login
	// then if everything is collect, set locals.user
	return resolve(event);
};

export const speedOfEachPage: Handle = async ({ event, resolve }) => {
	const { url } = event;
	const start = performance.now();
	const res = await resolve(event);
	const end = performance.now();
	const responseTime = end - start;
	if (responseTime > 2000) {
		console.log(`💥🐢 "${url}" page is slow. it takes:${responseTime.toFixed(2)}`);
	}
	if (responseTime < 2000) {
		console.log(`🚀🏎️  "${url}" page is faster.it takes:${responseTime.toFixed(2)}`);
	}
	return res;
};

export const handle: Handle = sequence(Authentication, speedOfEachPage, Authorization);

// hande fetch
export const handleFetch: HandleFetch = ({ event, request, fetch }) => {
	if (request.url.startsWith('/api/v1/node/k1')) {
		const cookies = event.request.headers.get('cookie');
		// let locals = event.locals;
		if (cookies) {
			request.headers.set('cookie', cookies);
		}
	}
	return fetch(request);
};

// handle error
// export const handleError: HandleServerError = async ({ event, error }) => {
// 	// here you can send your error to the logging services like centry
// 	const { url } = event;
// 	console.log(error, url);
// 	return {
// 		message: 'Error:::',
// 		error
// 	};
// };
