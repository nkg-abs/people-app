import context from '../core/context';
import PeopleService from '../services/people';

describe('actions', () => {
	const { patchState, addPerson, reset } = context.actions;

	test('patchState sets state', () => {
		const key = Symbol('key');
		const mockContext = { data: { key }};

		const result = patchState(mockContext);

		expect(result).toEqual({ key });
	});

	test('addPerson add new person', () => {
		const people = Symbol('people');
		const mockContext = Symbol('context');

		jest.spyOn(PeopleService, 'addPerson').mockReturnValue(people);

		const result = addPerson(mockContext);

		expect(PeopleService.addPerson).toHaveBeenCalledWith(mockContext);
		expect(result).toEqual({ people });
	});

	test('reset to inital value', () => {
		const people = [Symbol('people')];
		const seed = { seed: Symbol('seed'), people: people };
		const mockContext = { state: { people }, seed: seed };

		const result = reset(mockContext);

		expect(result).toEqual({ ...seed, people });
	});
});
