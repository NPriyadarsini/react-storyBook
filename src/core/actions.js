const setInput = ({ data: input }) => ({
	input,
});
const saveInput = ({ state }) => ({
	text: state.input,
});
const actions = {
	setInput,
	saveInput,
};

export default actions;
