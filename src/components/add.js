import React from 'react';

const Add = ({ actions: { addPeople }}) =>
	<button
		role="add"
		onClick={ addPeople }
	>+</button>;

export default Add;
