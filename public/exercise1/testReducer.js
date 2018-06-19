function testReducer() {

	let initial = {counterValue: 3};
	let after = {counterValue: 4};
	Object.freeze(initial);
	expect(
		reducer(initial, {type: "INCREMENT"})
	).toEqual(after);
}

try {
	testReducer();
	console.log("Cool, your reducer is pure!");
} catch {
	console.log("Hmm, your reducer isn't pure");
}
