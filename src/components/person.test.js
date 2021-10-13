import { render } from '@testing-library/react';
import { rndValue, rndString, rndBetween } from '@laufire/utils/random';
import context from '../core/context';
import Person from './person';

describe('person', () => {
	test('represents a person details', () => {
		const mockContext = {
			data: {
				id: rndString(),
				name: rndString(),
				age: rndBetween(0, 1),
				gender: rndValue(context.config.genders),
				maritalStatus: rndValue(context.config.maritalState),
			},
		};

		const component = render(Person(mockContext)).getByRole('person');

		expect(component).toBeInTheDocument();
	});
});
