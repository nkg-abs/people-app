import { React } from 'react';
import Name from './components/name';
import './App.scss';

const App = (context) =>
	<div className="App" role="app">
		{ Name(context) }
	</div>;

export default App;
