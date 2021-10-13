import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { map } from '@laufire/utils/collection';
import * as People from './components/people';
import * as InputPanel from './components/inputPanel';

describe('App', () => {
	test('renders with Input component.', () => {
		const context = Symbol('context');
		const components = {
			inputPanel: InputPanel,
			people: People,
		};

		map(components, (Component, role) => jest.spyOn(Component, 'default')
			.mockReturnValue(<input role={ role }/>));

		const { getByRole } = render(App(context));
		const appComponent = getByRole('app');

		map(components, (Component, role) => {
			expect(getByRole(role)).toBeInTheDocument();
			expect(Component.default).toHaveBeenCalledWith(context);
		});
		expect(appComponent).toBeInTheDocument();
		expect(appComponent).toHaveClass('App');
	});
});
