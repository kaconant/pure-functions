
let store = Redux.createStore(reducer);

store.subscribe(()=>{
	var state = store.getState();
	document.getElementById('counter').innerHTML = state.counterValue;
});

document.addEventListener('click', (e)=>{
	store.dispatch({
		type: "INCREMENT"
	});
});








