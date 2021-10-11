import { render, fireEvent } from '@testing-library/react';
import { map } from '@laufire/utils/collection';

const Helpers = {
	testInput: ({ lib: { Component, role }, attributes, changeValue }) => {
		const mockContext = {
			state: { [role]: attributes.value },
			actions: { patchState: jest.fn() },
		};

		test(`renders ${ role } component with appropriate attributes`, () => {
			const component = render(Component(mockContext)).getByRole(role);

			expect(component).toBeInTheDocument();
			map(attributes, (value, key) =>
				expect(component).toHaveAttribute(key, value));
		});

		test('triggers event patchState', () => {
			jest.spyOn(mockContext.actions, 'patchState');
			const value = changeValue;
			const component = render(Component(mockContext)).getByRole(role);

			fireEvent.change(component, { target: { value }});
			expect(mockContext.actions.patchState)
				.toHaveBeenCalledWith({ [role]: value });
		});
	},
};

export default Helpers;
