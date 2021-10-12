import Helpers from '../services/helpers';
import MaritalStatus from './marital-status';
import context from '../core/context';
import { shuffle } from '@laufire/utils/collection';

describe('gender', () => {
	const [value, changeValue] = shuffle(context.config.maritalState);

	Helpers.testInput({ lib: {
		Component: MaritalStatus,
		role: 'maritalStatus',
	},
	attributes: {
		value,
	},
	changeValue: changeValue	});
});
