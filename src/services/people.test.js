import PeopleService from './people';

describe('people', () => {
	test('includes people', () => {
		const people = [];
		const state = {
			name:	Symbol('name'),
			age: Symbol('age'),
			maritalStatus: Symbol('maritalStatus'),
			gender: Symbol('gender'),
		};
		const mockContext = { state: { ...state, people }};

		const result = PeopleService.addPerson(mockContext);

		expect(result).toEqual([state]);
	});
});
