import * as random from '@laufire/utils/random';
import PeopleService from './people';

describe('people', () => {
	test('includes people', () => {
		const people = [];
		const id = random.rndString();
		const state = {
			id: id,
			name:	Symbol('name'),
			age: Symbol('age'),
			maritalStatus: Symbol('maritalStatus'),
			gender: Symbol('gender'),
		};

		jest.spyOn(random, 'rndString').mockReturnValue(id);
		const mockContext = { state: { ...state, people }};

		const result = PeopleService.addPerson(mockContext);

		expect(result).toEqual([state]);
	});
});
