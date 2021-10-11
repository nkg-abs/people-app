import Name from './name';
import { rndString } from '@laufire/utils/random';
import Helpers from '../services/helpers';

describe('name', () => {
	const name = rndString();

	Helpers.testInput({ lib: {
		Component: Name,
		role: 'name',
	},
	attributes: {
		value: name,
		placeholder: 'Enter a name...',
	},
	changeValue: rndString() });
});
