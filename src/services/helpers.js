/* eslint-disable max-lines-per-function */
import { render, fireEvent } from '@testing-library/react';
import { map } from '@laufire/utils/collection';
import context from '../core/context';

const Helpers = {
	testInput: ({ lib: { Component, role }, attributes, changeValue }) => {
		const mockContext = {
			state: { [role]: attributes.value },
			actions: { patchState: jest.fn() },
			config: context.config,
		};

		test(`renders ${ role } component with appropriate attributes`, () => {
			const component = render(Component(mockContext)).getByRole(role);

			expect(component).toBeInTheDocument();
			map(attributes, (value, key) =>
				expect(component[key]).toEqual(value));
		});

		test('triggers event patchState', () => {
			jest.spyOn(mockContext.actions, 'patchState');

			const component = render(Component(mockContext)).getByRole(role);

			fireEvent.change(component, { target: { value: changeValue }});
			expect(mockContext.actions.patchState)
				.toHaveBeenCalledWith({ [role]: changeValue });
		});
	},
};

export default Helpers;
