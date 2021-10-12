import { render, fireEvent } from '@testing-library/react';
import Add from './add';

describe('add', () => {
	const context = { actions: { addPerson: jest.fn(), reset: jest.fn() }};

	test('Presents a event', () => {
		const component = render(Add(context)).getByRole('add');

		expect(component).toBeInTheDocument();
		expect(component).toHaveTextContent('+');
	});

	test('triggers a event, addPeople', () => {
		jest.spyOn(context.actions, 'addPerson');
		jest.spyOn(context.actions, 'reset');
		const component = render(Add(context)).getByRole('add');

		fireEvent.click(component);

		expect(context.actions.addPerson).toHaveBeenCalled();
		expect(context.actions.addPerson).toHaveBeenCalled();
	});
});
