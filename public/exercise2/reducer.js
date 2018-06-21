let initialState = {
	counters: []
};

// This reducer isn't pure! It updates the nested "counters" array of the original 
//     state object
const reducer = (state = initialState, action) => {
	let { type, counterIndex } = action;
	
	let stateCopy = {
		...state, 
		counters: [...state.counters]
	};
	
	if (type == "INCREMENT") {
		stateCopy.counters[counterIndex]++;
		return stateCopy;
	
	} else if (type == "ADD_COUNTER") {
		stateCopy.counters.push(0);
		return stateCopy;

	} else {
		return stateCopy;
	}
}

/* OR 
if (type == "INCREMENT") {
		return {
			counters: [
				...state.counters.slice(0, counterIndex),
				state.counters[counterIndex] + 1,
				...state.counters.slice(counterIndex + 1);
			]
		}
	} else if (type == "ADD_COUNTER") {
		return {
			counters: state.counter.concat(0)
		};
	} else {
		return stateCopy;
	}
*/