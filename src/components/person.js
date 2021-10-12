import React from 'react';

const Person = ({ name, age, gender, maritalStatus }) =>
	<div key={ name } role="person">
		{ name } { age } { gender } { maritalStatus}
	</div>;

export default Person;
