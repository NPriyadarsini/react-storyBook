import { React } from 'react';
import { SelectBox } from './SelectBox';

export default {
	title: 'SelectBox',
	component: SelectBox,
};

const Template = (args) => <SelectBox { ...args }/>;

export const Gender = Template.bind({});
Gender.args = {
	size: 'small',
	label: 'SelectBox',
	options: [{ s: '-select-' }, { m: 'male' }, { f: 'female' }],
};
