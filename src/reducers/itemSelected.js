
let defaultState = {id: '', name: '', level: 0}; 

let itemSelected = (state = defaultState, action) => {
	switch (action.type){
		case 'SELECT_ITEM':
			return action.item;
		case 'UNSELECT_ITEM':
			return defaultState;
		default:
			return state;
	}
}

export default itemSelected;