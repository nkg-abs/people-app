import { render } from '@testing-library/react';
import Add from './add';

describe('add', () => {
	const context = { actions: { addPeople: jest.fn() }};

	test('Presents a event', () => {
		const component = render(Add(context)).getByRole('add');

		expect(component).toBeInTheDocument();
		expect(component).toHaveTextContent('+');
	});
});
