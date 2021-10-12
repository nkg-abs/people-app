import Helpers from '../services/helpers';
import MaritalStatus from './marital-status';
import context from '../core/context';

describe('gender', () => {
	const [value, changeValue] = context.config.maritalState;

	Helpers.testInput({ lib: {
		Component: MaritalStatus,
		role: 'maritalStatus',
	},
	attributes: {
		value,
	},
	changeValue: changeValue	});
});
