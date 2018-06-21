let initialState = {
	counterValue: 0
};

// This reducer isn't pure! It updates the "counterValue" key of the original 
//     state object
const reducer = (state = initialState, action) => {
	if (action.type == "INCREMENT") {
		// state.counterValue++; OR state.counterValue = state.counterValue + 1
		// return state;

		return { // call on the same key from initialState
			counterValue: state.counterValue + 1

		// Another way
		// let stateCopy = Object.assign({}, state); OR let stateCopy = {...state};
		// state.Copy.counterValue++;
		// return stateCopy;

		}
	} else {
		return state;
	}
}