import React from 'react';
import Add from './add';
import Age from './age';
import Gender from './gender';
import MaritalStatus from './marital-status';
import Name from './name';

const InputPanel = (context) =>
	<div role="inputPanel">
		{ Name(context)}
		{ Age(context)}
		{ Gender(context)}
		{ MaritalStatus(context)}
		{ Add(context) }
	</div>;

export default InputPanel;
