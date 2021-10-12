import Name from './name';
import { rndString } from '@laufire/utils/random';
import Helpers from '../services/helpers';

describe('name', () =>
	Helpers.testInput({ lib: {
		Component: Name,
		role: 'name',
	},
	attributes: {
		value: rndString(),
		placeholder: 'Enter a name...',
	},
	changeValue: rndString() }));
