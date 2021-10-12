import { React } from 'react';
import './App.scss';
import People from './components/people';
import InputPanel from './components/inputPanel';

const App = (context) =>
	<div className="App" role="app">
		{ InputPanel(context)}
		{ People(context)}
	</div>;

export default App;
