/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';

import App from './App';
import * as NameInput from './components/nameInput';
import context from './core/context';

describe('App', () => {
	test('renders with Input component.', () => {
		jest.spyOn(NameInput, 'default')
			.mockReturnValue(<input role="name"/>);
		const { getByRole } = render(App(context));

		expect(getByRole('name')).toBeInTheDocument();
		expect(getByRole('app')).toBeInTheDocument();
		expect(getByRole('app')).toHaveClass('App');
	});
});
