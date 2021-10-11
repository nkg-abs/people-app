import { render, fireEvent } from '@testing-library/react';
import Name from './name';
import { rndString } from '@laufire/utils/random';
import Helpers from '../services/helpers';

describe('name', () => {
	const name = rndString();
	const mockContext = { state: { name }, actions: { patchState: jest.fn() }};

	test('renders input element', () =>
		Helpers.testInput({ lib: {
			Component: Name,
			role: 'name',
			context: mockContext,
		},
		attributes: {
			value: name,
			placeholder: 'Enter a name...',
		}}));

	test('triggers action patchState while onchange', () => {
		jest.spyOn(mockContext.actions, 'patchState');
		const value = rndString();
		const component = render(Name(mockContext)).getByRole('name');

		fireEvent.change(component, { target: { value }});
		expect(mockContext.actions.patchState)
			.toHaveBeenCalledWith({ name: value });
	});
});
