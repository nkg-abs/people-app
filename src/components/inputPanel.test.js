import React from 'react';
import { render } from '@testing-library/react';
import * as Add from './add';
import * as Age from './age';
import * as Gender from './gender';
import * as MaritalStatus from './marital-status';
import * as Name from './name';
import { map } from '@laufire/utils/collection';
import InputPanel from './inputPanel';

describe('inputPanel', () => {
	test('renders with Input component.', () => {
		const context = Symbol('context');
		const components = {
			name: Name,
			age: Age,
			gender: Gender,
			maritalStatus: MaritalStatus,
			add: Add,
		};

		map(components, (Component, role) => jest.spyOn(Component, 'default')
			.mockReturnValue(<input role={ role }/>));

		const { getByRole } = render(InputPanel(context));

		expect(getByRole('inputPanel')).toBeInTheDocument();
		map(components, (Component, role) => {
			expect(getByRole(role)).toBeInTheDocument();
			expect(Component.default).toHaveBeenCalledWith(context);
		});
	});
});
