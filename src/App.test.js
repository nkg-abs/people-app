/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';

import App from './App';
import * as Name from './components/name';
import * as Age from './components/age';
import * as Gender from './components/gender';
import * as MaritalStatus from './components/marital-status';
import { map } from '@laufire/utils/collection';

describe('App', () => {
	test('renders with Input component.', () => {
		const context = Symbol('context');
		const components = {
			name: Name,
			age: Age,
			gender: Gender,
			maritalStatus: MaritalStatus,
		};

		map(components, (Component, role) => jest.spyOn(Component, 'default')
			.mockReturnValue(<input role={ role }/>));

		const { getByRole } = render(App(context));

		map(components, (Component, role) => {
			expect(getByRole(role)).toBeInTheDocument();
			expect(Component.default).toHaveBeenCalledWith(context);
		});
		expect(getByRole('app')).toBeInTheDocument();
		expect(getByRole('app')).toHaveClass('App');
	});
});
