let initialState = {
	todos: [
		{
			text: "Take out the trash",
			isComplete: false,
			comments: []
		}
	]
};

// This reducer isn't pure! Fix it plz
const reducer = (state = initialState, action) => {
	Object.freeze(state); // will break if code is wrong
	let stateCopy = {
		...state,
		// if todos was simple
		// todos: [...state.todos]
		// if todos includes arrays or objects, do the following
		todos: state.todos.map((todo) => {
			return {
				...todo,
				// because comments is in array, must target array
				comments: [...todo.comments]
			}
		}) 
	};

	if (action.type == "ADD_TODO") {
		stateCopy.todos.push({
			text: action.todoText,
			isComplete: false
		});
		return stateCopy;
	} else if (action.type == "TOGGLE_TODO") {
		let todoToToggle = stateCopy.todos[action.todoIndex];
		todoToToggle.isComplete = !todoToToggle.isComplete;
		return stateCopy;
	} else {
		return stateCopy;
	}
}
