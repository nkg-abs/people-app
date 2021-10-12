const PeopleService = {
	addPerson: ({ state: { people, name, age, maritalStatus, gender }}) =>
		people.concat({ name, age, maritalStatus, gender }),
};

export default PeopleService;
