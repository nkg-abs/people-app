import PeopleService from '../services/people';

const actions = {
	patchState: ({ data }) => ({
		...data,
	}),
	addPerson: (context) => ({
		people: PeopleService.addPerson(context),
	}),
};

export default actions;
