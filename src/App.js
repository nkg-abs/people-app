import { React } from 'react';
import Name from './components/name';
import './App.scss';
import Age from './components/age';

const App = (context) =>
	<div className="App" role="app">
		{ Name(context) }
		{ Age(context) }
	</div>;

export default App;
