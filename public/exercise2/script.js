
let store = Redux.createStore(reducer);

store.subscribe(()=>{
	var state = store.getState();
	
	let finalHTML = '';
	console.log(state)
	state.counters.forEach((counter, index) => {

		let counterTemplate = `
			<span>${counter}</span>
			<button onclick="increment(${index})">increment</button>
		`;
		finalHTML += counterTemplate;
	});

	document.getElementById('counters').innerHTML = finalHTML;
	
});

function increment(counterIndex){
	store.dispatch({
		type: "INCREMENT",
		counterIndex
	});
};

document.getElementById('addCounter').addEventListener('click', (e)=>{
	store.dispatch({
		type: "ADD_COUNTER"
	});
});







