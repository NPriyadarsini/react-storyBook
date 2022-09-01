import { React } from 'react';
import { Input } from './Input';

export default {
	title: 'Input',
	component: Input,
};

const Template = (args) => <Input { ...args }/>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	primary: true,
	label: 'Input',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Input',
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'Input',
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 'Input',
};
export const TextBox = Template.bind({});
TextBox.args = {
	label: 'Input',
};
