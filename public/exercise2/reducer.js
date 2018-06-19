let initialState = {
	counters: []
};

// This reducer isn't pure! It updates the nested "counters" array of the original 
//     state object
const reducer = (state = initialState, action) => {
	let { type, counterIndex } = action;
	if (type == "INCREMENT") {
		state.counters[counterIndex]++;
		return state;
	} else if (type == "ADD_COUNTER") {
		state.counters.push(0);
		return state;
	} else {
		return state;
	}
}
