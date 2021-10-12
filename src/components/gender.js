import React from 'react';

const Gender = ({
	state: { gender },
	actions: { patchState },
	config: { genders: options },
}) =>
	<select
		role="gender"
		value={ gender }
		onChange={ (event) =>
			patchState({ gender: event.target.value }) }
	>
		{
			options.map((item) =>
				<option key={ item } role="option">{ item }</option>)
		}
	</select>;

export default Gender;
