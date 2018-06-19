let initialState = {
	todos: [
		{
			text: "Take out the trash",
			isComplete: false
		}
	]
};


// This reducer isn't pure! Fix it plz
const reducer = (state = initialState, action) => {
	if (action.type == "ADD_TODO") {
		state.todos.push({
			text: action.todoText,
			isComplete: false
		});
		return state;
	} else if (action.type == "TOGGLE_TODO") {
		let todoToToggle = state.todos[action.todoIndex];
		todoToToggle.isComplete = !todoToToggle.isComplete;
		return state;
	} else {
		return state;
	}
}
