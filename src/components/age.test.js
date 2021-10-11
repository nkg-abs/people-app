import Helpers from '../services/helpers';
import Age from '../components/age';
import { rndBetween } from '@laufire/utils/random';

describe('age', () => {
	// eslint-disable-next-line no-magic-numbers
	const age = rndBetween(1, 10);
	const mockContext = { state: { age }, actions: { patchState: jest.fn() }};

	test('renders input element', () =>
		Helpers.testInput({ lib: {
			Component: Age,
			role: 'age',
			context: mockContext,
		},
		attributes: {
			value: String(age),
			placeholder: 'Enter age...',
		}}));
});
