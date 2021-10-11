import React from 'react';

const Age = ({ actions, state: { age }}) =>
	<input
		role="age"
		type="number"
		placeholder="Enter age..."
		value={ age }
		onChange={ (event) =>
			actions.patchState({ age: event.target.value }) }
	/>;

export default Age;
