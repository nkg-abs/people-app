import React from 'react';

const Name = ({ actions, state: { name }}) =>
	<input
		role="name"
		placeholder="Enter a name..."
		value={ name }
		onChange={ (event) =>
			actions.patchState({ name: event.target.value }) }
	/>;

export default Name;
