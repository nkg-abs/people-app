import Helpers from '../services/helpers';
import Gender from './gender';
import context from '../core/context';

describe('gender', () => {
	const [value, changeValue] = context.config.gender;

	Helpers.testInput({ lib: {
		Component: Gender,
		role: 'gender',
	},
	attributes: {
		value,
	},
	changeValue: changeValue	});
});
