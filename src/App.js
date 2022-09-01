import { React } from 'react';
import './App.scss';
import { Button } from './stories/Button';
import { Save, Secondary } from './stories/Button.stories';
import { Input } from './stories/Input';

const App = (context) => {
	const { state: { text }} = context;

	return <div className="App" role="App">
		StoryBook
		<div>
			<Input
				{ ...Secondary.args }
				onChange={ (evt) =>
					context.actions.setInput(evt.target.value) }
			/>
			<Button
				{ ...Save.args }
				onClick={ (evt) =>
					context.actions.saveInput(evt.target.value) }
			/>
		</div>
		<div>{text}</div>
	</div>;
};

export default App;
