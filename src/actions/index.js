import * as type from './../constants/actionTypes'

export const actCloseForm = () => {
    return {
        type : type.CLOSE_FORM
    }
}

export const actOpenForm = () => {
    return {
        type : type.OPEN_FORM
    }
}

export const actToggleForm = () => {
    return {
        type : type.TOGGLE_FORM
    }
}

export const actSort = (orderBy, orderDir) => {
    return {
        type : type.SORT_ITEM,
        orderBy ,
        orderDir 
    }
}

export const actSearch = (search) => {
    return {
        type : 'CHANGE_SEARCH',
        search
    }
}

export const actDeleteItem = (id) => {
    return {
        type : 'DELETE_ITEM',
        id
    }
}

export const actSubmitForm = (item) => {
    return {
        type : 'SUBMIT_FORM',
        item
    }
}

export const actSelectedItem = (item) => {
    return {
        type : 'SELECT_ITEM',
        item
    }
}

export const actUnSelectItem = () => {
    return {
        type : 'UNSELECT_ITEM',
    }
}