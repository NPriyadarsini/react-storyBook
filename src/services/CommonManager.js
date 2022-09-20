import { keys } from '@laufire/utils/collection';
import { peek } from '@laufire/utils/debug';
const CommonManager = {
	setGender: ({ config, data: selected }) => {
		// eslint-disable-next-line no-console
		console.log(selected);
		const gender = config.genderType.find((type) => `${ keys(type) }` === peek(selected));

		return Object.values(gender);
	},
};

export default CommonManager;
