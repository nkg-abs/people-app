import React from 'react';
import { render } from '@testing-library/react';
import People from './people';
import Person from './person';

describe('people', () => {
	test('repesents people details', () => {
		const people = [];
		const context = { state: { people }};

		jest.spyOn(people, 'map').mockReturnValue(<div role="person"/>);

		const { getByRole } = render(People(context));

		expect(people.map).toHaveBeenCalledWith(Person);
		['people', 'person'].forEach((role) =>
			expect(getByRole(role)).toBeInTheDocument());
	});
});
