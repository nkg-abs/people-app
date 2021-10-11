import { render, fireEvent } from '@testing-library/react';
import Name from './name';
import { rndString } from '@laufire/utils/random';

describe('name', () => {
	const name = rndString();
	const mockContext = { state: { name }, actions: { patchState: jest.fn() }};

	test('renders input element', () => {
		const { getByRole } = render(Name(mockContext));
		const component = getByRole('name');

		expect(component).toBeInTheDocument();
		expect(component)
			.toHaveAttribute('placeholder', 'Enter a name...');
		expect(component).toHaveAttribute('value', name);
	});

	test('triggers action patchState while onchange', () => {
		jest.spyOn(mockContext.actions, 'patchState');
		const value = rndString();
		const component = render(Name(mockContext)).getByRole('name');

		fireEvent.change(component, { target: { value }});
		expect(mockContext.actions.patchState)
			.toHaveBeenCalledWith({ name: value });
	});
});
