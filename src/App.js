import { React } from 'react';
import Name from './components/name';
import './App.scss';
import Age from './components/age';
import Gender from './components/gender';
import MaritalStatus from './components/marital-status';
import { peek } from '@laufire/utils/debug';
import Add from './components/add';

const App = (context) => {
	// eslint-disable-next-line react/destructuring-assignment
	peek(context.state);

	return (
		<div className="App" role="app">
			{ Name(context) }
			{ Age(context) }
			{ Gender(context) }
			{ MaritalStatus(context) }
			{ Add(context) }
		</div>
	);
};

export default App;
