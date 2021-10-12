import React from 'react';

const Add = ({ actions: { addPerson }}) =>
	<button
		role="add"
		onClick={ addPerson }
	>+</button>;

export default Add;
