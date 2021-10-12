import React from 'react';
import { render } from '@testing-library/react';
import People from './people';

describe('people', () => {
	test('repesents people details', () => {
		const people = [];
		const context = { state: { people }};

		jest.spyOn(people, 'map').mockReturnValue(<div role="person"/>);
		const { getByRole } = render(People(context));

		expect(getByRole('people')).toBeInTheDocument();
		expect(getByRole('person')).toBeInTheDocument();
	});
});
