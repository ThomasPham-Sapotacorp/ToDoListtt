

let defaultState = ''; 

let items = (state = defaultState, action) => {
	switch (action.type){
		case 'CHANGE_SEARCH':
			return action.search;
		default:
			return state;
	}
}

export default items;