import { render, fireEvent } from '@testing-library/react';
import Add from './add';
import { map } from '@laufire/utils/collection';

describe('add', () => {
	const context = { actions: { addPerson: jest.fn(), reset: jest.fn() }};

	test('Presents a event', () => {
		const component = render(Add(context)).getByRole('add');

		expect(component).toBeInTheDocument();
		expect(component).toHaveTextContent('+');
	});

	test('triggers actions, addPerson and reset', () => {
		map(context.actions, (value, key) =>
			jest.spyOn(context.actions, key).mockImplementation());

		const component = render(Add(context)).getByRole('add');

		fireEvent.click(component);

		map(context.actions, (value, key) =>
			expect(context.actions[key]).toHaveBeenCalled());
	});
});
