/* eslint-disable no-magic-numbers */
import Helpers from '../services/helpers';
import Age from '../components/age';
import { rndBetween } from '@laufire/utils/random';

describe('age', () => {
	const age = rndBetween(1, 10);

	Helpers.testInput({ lib: {
		Component: Age,
		role: 'age',
	},
	attributes: {
		value: String(age),
		placeholder: 'Enter age...',
	},
	changeValue: String(rndBetween(20, 30)) });
});
