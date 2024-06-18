// import nodemailer from 'nodemailer';
// import { EMAIL_FROM, SENDGRID_API_KEY } from '$env/static/private';

// export const Mail = async (Info: {
// 	to: string;
// 	subject: string;
// 	EmailTemplate: string;
// 	attachmentLink?: string;
// }) => {
// 	console.log(Info?.attachmentLink);
// 	const transporter = nodemailer.createTransport({
// 		service: 'gmail',
// 		auth: {
// 			user: EMAIL_FROM ?? '',
// 			pass: SENDGRID_API_KEY ?? ''
// 		}
// 	});

// 	const mailOptions = {
// 		from: `"UNIVERSITY OF RWANDA"<${process.env?.EMAIL_FROM ?? ''}>`,
// 		to: Info.to,
// 		subject: Info.subject,
// 		html: Info.EmailTemplate
// 		// attachments: [
// 		//   {
// 		//     filename: 'attachment.pdf',
// 		//     path: Info?.attachmentLink,
// 		//   },
// 		// ],
// 	};

// 	try {
// 		const sendMail = await transporter.sendMail(mailOptions);
// 		return sendMail;
// 	} catch (error) {
// 		console.error('Error sending email:', error);
// 		throw error;
// 	}
// };
