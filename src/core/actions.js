import PeopleService from '../services/people';

const actions = {
	patchState: ({ data }) => ({
		...data,
	}),

	addPerson: (context) => ({
		people: PeopleService.addPerson(context),
	}),

	reset: ({ state: { people }, seed }) => ({
		...seed,
		people,
	}),
};

export default actions;
