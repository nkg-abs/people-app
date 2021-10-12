import context from '../core/context';
import PeopleService from '../services/people';

describe('actions', () => {
	const { patchState, addPerson, reset } = context.actions;

	test('patchState sets state', () => {
		const data = Symbol('data');
		const mockContext = { data };

		const result = patchState(mockContext);

		expect(result).toEqual(data);
	});

	test('addPerson adds a new person', () => {
		const people = Symbol('people');
		const mockContext = Symbol('context');

		jest.spyOn(PeopleService, 'addPerson').mockReturnValue(people);

		const result = addPerson(mockContext);

		expect(PeopleService.addPerson).toHaveBeenCalledWith(mockContext);
		expect(result).toEqual({ people });
	});

	test('reset to inital value', () => {
		const people = [Symbol('people')];
		const mockContext = { state: { people }, seed: context.seed };

		const result = reset(mockContext);

		expect(result).toEqual({ ...context.seed, people });
	});
});
