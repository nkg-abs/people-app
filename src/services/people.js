import { rndString } from '@laufire/utils/random';

const PeopleService = {
	addPerson: ({
		state: { people, name, age, maritalStatus, gender },
	}) => {
		const id = rndString();

		return people.concat({ id, name, age, maritalStatus, gender });
	}
	,
};

export default PeopleService;
