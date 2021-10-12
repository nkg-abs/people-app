import PeopleService from './people';

describe('people', () => {
	test('includes people', () => {
		const people = [];
		const [name, age, maritalStatus, gender] = [
			Symbol('name'),
			Symbol('age'),
			Symbol('maritalStatus'),
			Symbol('gender'),
		];
		const mockContext = { state: {
			name,
			age,
			maritalStatus,
			gender,
			people,
		}};

		const result = PeopleService.addPerson(mockContext);

		expect(result).toEqual([{
			name,
			age,
			maritalStatus,
			gender,
		}]);
	});
});
