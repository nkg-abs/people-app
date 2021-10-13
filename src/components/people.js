import React from 'react';
import Person from './person';

const People = (context) => {
	const { state } = context;

	return (
		<div role="people">
			{ state.people.map((person) =>
				Person({ ...context, data: person }))}
		</div>
	);
};

export default People;
