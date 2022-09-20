import CommonManager from '../services/CommonManager';

const setInput = ({ data: input }) => ({
	input,
});
const saveInput = ({ state }) => ({
	text: state.input,
});
const setSelected = (context) => ({
	gender: CommonManager.setGender(context),
});
const actions = {
	setInput,
	saveInput,
	setSelected,
};

export default actions;
