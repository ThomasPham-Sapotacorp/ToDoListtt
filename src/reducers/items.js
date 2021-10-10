import _ from 'lodash';
import * as config from './../constants/config';
import { v4 as uuidv4 } from 'uuid';

let defaultState = []; 
let tasks = JSON.parse(localStorage.getItem(config.ITEM_FROM_LOCAL_STORAGE)) || []; //task mặc định ở local storage

defaultState = (tasks.length > 0) ? tasks : defaultState

let items = (state = defaultState, action) => {
	let id = null
	switch (action.type){
		case 'DELETE_ITEM':
			id = action.id;
			_.remove(state, (item) => {
				return item.id === id
			})
			localStorage.setItem(config.ITEM_FROM_LOCAL_STORAGE, JSON.stringify(state));
			return [...state];

		case 'SUBMIT_FORM':
			console.log(action);
			let item 	= action.item;

			if (item.id){
				state  = _.reject(state, {id: item.id});
				id = item.id;				
			}else{ //ADD
				id = uuidv4();
			}
			
			state.push({
				id		: id,
				name	: item.name,
				level	: item.level
			})
			localStorage.setItem(config.ITEM_FROM_LOCAL_STORAGE, JSON.stringify(state));
		
			return [...state];
		default:
			return state;
	}
}

export default items;