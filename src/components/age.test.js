/* eslint-disable no-magic-numbers */
import Helpers from '../services/helpers';
import Age from '../components/age';
import { rndBetween } from '@laufire/utils/random';

describe('age', () =>
	Helpers.testInput({ lib: {
		Component: Age,
		role: 'age',
	},
	attributes: {
		value: String(rndBetween(1, 10)),
		placeholder: 'Enter age...',
	},
	changeValue: String(rndBetween(11, 21)) }));
