
let store = Redux.createStore(reducer);
render(); // make sure the initial render happens

store.subscribe(render);
function render() {
	var state = store.getState();
	let finalHTML = '';

	state.todos.forEach((todo, index) => {
		let strike = todo.isComplete ? 'style="text-decoration:line-through;"' : '';
		let todoTemplate = `
			<li ${strike} onclick="toggle(${index})">${todo.text}</li>
		`;
		finalHTML += todoTemplate;
	});

	document.getElementById('todos').innerHTML = finalHTML;
}

var newId = 1;
document.getElementById('addTodo').addEventListener('click', function(){
	let todoText = document.getElementById('textField').value;
	store.dispatch({
		type: "ADD_TODO",
		todoText
	})
});

function toggle(todoIndex) {
	store.dispatch({
		type: "TOGGLE_TODO",
		todoIndex
	})
}








