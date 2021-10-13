import React from 'react';

const Person = ({
	data: { id, name, age, gender, maritalStatus },
}) =>
	<div key={ id } role="person">
		{ name } { age } { gender } { maritalStatus}
	</div>;

export default Person;
