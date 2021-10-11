import { React } from 'react';
import Name from './components/nameInput';
import './App.scss';

const App = () =>
	<div className="App" role="app">
		{ Name() }
	</div>;

export default App;
