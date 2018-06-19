function testReducer() {

	let initial1 = {todos: []};
	let after1 = {todos: [
		{
			text: "first",
			isComplete: false
		}
	]};

	initial1.todos.forEach(todo => Object.freeze(todo));
	Object.freeze(initial1.todos);
	Object.freeze(initial1);
	expect(
		reducer(initial1, {type: "ADD_TODO", todoText: "first"})
	).toEqual(after1);


	let initial2 = {todos: [
		{
			text: "first",
			isComplete: false
		}
	]};
	let after2 = {todos: [
		{
			text: "first",
			isComplete: true
		}
	]};

	initial2.todos.forEach(todo => Object.freeze(todo));
	Object.freeze(initial2.todos);
	Object.freeze(initial2);
	expect(
		reducer(initial2, {type: "TOGGLE_TODO", todoIndex: 0})
	).toEqual(after2);

}

try {
	testReducer();
	console.log("Cool, your reducer is pure!");
} catch {
	console.log("Hmm, your reducer isn't pure");
}
