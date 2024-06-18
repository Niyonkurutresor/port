import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

export default function (node: HTMLElement, option: object) {
	const instance = tippy(node, option);
	return {
		update(newOption: object) {
			// to update the change
			instance.setProps(newOption);
		},
		destroy() {
			instance.destroy();
		}
	};
}
