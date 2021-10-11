import { render } from '@testing-library/react';
import Name from './nameInput';

describe('name', () => {
	test('renders input element', () => {
		const { getByRole } = render(Name());

		expect(getByRole('name')).toBeInTheDocument();
		expect(getByRole('name'))
			.toHaveAttribute('placeholder', 'Enter a name...');
	});
});
