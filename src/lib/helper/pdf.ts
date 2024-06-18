// import { toasts } from 'svelte-toasts';

// export const exportToPDF = async (id: string, orientation?: string) => {
// 	try {
// 		const elementToExport = document.getElementById(id);
// 		const pdfOptions = {
// 			margin: 10,
// 			filename: `${id}.pdf`,
// 			image: { type: 'jpeg', quality: 0.98 },
// 			html2canvas: { scale: 2 },
// 			jsPDF: { unit: 'mm', format: 'a4', orientation: orientation ?? 'portrait' },
// 			header: 'header',
// 			footer: 'fottter',
// 			watermark: 'confidential',
// 			customCSS: `.watermark {
//                 position: fixed;
//                 top: 50%;
//                 left: 50%;
//                 transform: translate(-50%, -50%);
//                 font-size: 36px;
//                 color: rgba(255, 0, 0, 0.5);
//                 opacity: 0.5;
//                 pointer-events: none;
//             }`
// 		};
// 		const html2pdfModule = await import('html2pdf.js');
// 		const html2pdf = html2pdfModule.default || html2pdfModule;
// 		html2pdf().set(pdfOptions).from(elementToExport).save();
// 	} catch (error) {
// 		toasts.error('Exporting accured during export of file,try again.');
// 		console.error('Error exporting to PDF:', error);
// 	}
// };
