import React from 'react';

const MaritalStatus = ({
	state: { maritalStatus },
	actions: { patchState },
	config: { maritalState },
}) =>
	<select
		role="maritalStatus"
		value={ maritalStatus }
		onChange={ (event) =>
			patchState({ maritalStatus: event.target.value }) }
	>
		{
			maritalState.map((item) =>
				<option key={ item } role="option">{ item }</option>)
		}
	</select>;

export default MaritalStatus;
