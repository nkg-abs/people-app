import { React } from 'react';
import Name from './components/name';
import './App.scss';
import Age from './components/age';
import Gender from './components/gender';

const App = (context) =>
	<div className="App" role="app">
		{ Name(context) }
		{ Age(context) }
		{ Gender(context) }
	</div>;

export default App;
