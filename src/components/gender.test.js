import Helpers from '../services/helpers';
import Gender from './gender';
import context from '../core/context';
import { shuffle } from '@laufire/utils/collection';

describe('gender', () => {
	const [value, changeValue] = shuffle(context.config.genders);

	Helpers.testInput({ lib: {
		Component: Gender,
		role: 'gender',
	},
	attributes: {
		value,
	},
	changeValue: changeValue	});
});
