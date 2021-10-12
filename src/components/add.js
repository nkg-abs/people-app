import React from 'react';

const Add = ({ actions: { addPerson, reset }}) =>
	<button
		role="add"
		onClick={ () => {
			addPerson();
			reset();
		} }
	>+</button>;

export default Add;
