import React from 'react';
import { render } from '@testing-library/react';
import People from './people';
import * as Person from './person';
import { range } from '@laufire/utils/collection';
import { rndBetween } from '@laufire/utils/lib';

describe('people', () => {
	test('repesents people details', () => {
		// eslint-disable-next-line no-magic-numbers
		const rndPeople = range(1, rndBetween(1, 3));
		const people = rndPeople.map((id) => ({ id }));
		const context = { state: { people }};

		jest.spyOn(Person, 'default')
			.mockImplementation(({ data: { id }}) =>
				<div key={ id } role={ id }/>);

		const { getByRole } = render(People(context));

		rndPeople.forEach((id) => {
			expect(Person.default)
				.toHaveBeenCalledWith({ ...context, data: { id }});
			expect(getByRole(id)).toBeInTheDocument();
		});
		expect(getByRole('people')).toBeInTheDocument();
	});
});
