const setInput = ({ data: input }) => ({
	input,
});
const saveInput = ({ state }) => ({
	text: state.input,
});
const setSelected = ({ data: selected }) => ({
	selected,
});
const actions = {
	setInput,
	saveInput,
	setSelected,
};

export default actions;
