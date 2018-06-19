function testReducer() {

	let initial1 = {counters: []};
	let after1 = {counters: [0]};

	let initial2 = {counters: [0]};
	let after2 = {counters: [1]};

	let initial3 = {counters: [1]};
	let after3 = {counters: [1, 0]};

	Object.freeze(initial1.counters);
	Object.freeze(initial2.counters);
	Object.freeze(initial3.counters);
	Object.freeze(initial1);
	Object.freeze(initial2);
	Object.freeze(initial3);

	expect(
		reducer(initial1, {type: "ADD_COUNTER"})
	).toEqual(after1);
	expect(
		reducer(initial2, {type: "INCREMENT", counterIndex: 0})
	).toEqual(after2);
	expect(
		reducer(initial3, {type: "ADD_COUNTER"})
	).toEqual(after3);
}

try {
	testReducer();
	console.log("Cool, your reducer is pure!");
} catch {
	console.log("Hmm, your reducer isn't pure");
}
