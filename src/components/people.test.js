import React from 'react';
import { render } from '@testing-library/react';
import People from './people';
import * as Person from './person';
import { range } from '@laufire/utils/collection';
import { rndBetween, rndString } from '@laufire/utils/random';

describe('people', () => {
	test('repesents people details', () => {
		// eslint-disable-next-line no-magic-numbers
		const rndPeople = range(2, rndBetween(3, 5));
		const people = rndPeople.map(() => ({ id: rndString() }));
		const context = { state: { people }};

		jest.spyOn(Person, 'default')
			.mockImplementation(({ data: { id: key }}) =>
				<div key={ key } role={ key }/>);

		const { getByRole } = render(People(context));

		people.forEach((person) => {
			expect(Person.default)
				.toHaveBeenCalledWith({ ...context, data: person });
			expect(getByRole(person.id)).toBeInTheDocument();
		});
		expect(getByRole('people')).toBeInTheDocument();
	});
});
