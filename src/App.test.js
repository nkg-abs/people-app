/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';

import App from './App';
import * as Name from './components/name';

describe('App', () => {
	test('renders with Input component.', () => {
		const context = Symbol('context');

		jest.spyOn(Name, 'default')
			.mockReturnValue(<input role="name"/>);
		const { getByRole } = render(App(context));

		expect(getByRole('name')).toBeInTheDocument();
		expect(getByRole('app')).toBeInTheDocument();
		expect(Name.default).toHaveBeenCalledWith(context);
		expect(getByRole('app')).toHaveClass('App');
	});
});
