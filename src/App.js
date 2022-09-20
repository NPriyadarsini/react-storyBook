/* eslint-disable max-lines-per-function */
import { React } from 'react';
import './App.scss';
import { Button } from './stories/Button';
import { Save, Secondary } from './stories/Button.stories';
import { Input } from './stories/Input';
import { SelectBox } from './stories/SelectBox';
import { Gender } from './stories/SelectBox.stories';

const App = (context) => {
	const { state: { text, gender, selected }} = context;

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
			<SelectBox
				{ ...Gender.args }
				value={ selected }
				onChange={ (evt) =>
					context.actions.setSelected(evt.target.value) }
			/>
		</div>
		<div>Name:{ text } <br/> Gender:{ gender }</div>
	</div>;
};

export default App;
