import { React } from 'react';
import { SelectBox } from './SelectBox';

export default {
	title: 'SelectBox',
	component: SelectBox,
};

const Template = (args) => <SelectBox { ...args }/>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	primary: true,
	label: 'SelectBox',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'SelectBox',
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'SelectBox',
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 'SelectBox',
};
export const Gender = Template.bind({});
Gender.args = {
	size: 'small',
	label: 'SelectBox',
	options: ['male', 'female'],
};
