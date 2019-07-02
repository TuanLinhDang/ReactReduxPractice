import * as types from './../constants/ActionTypes'

export const addToCart = (product, quantity) => {
    return{
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const changeMessage = (message) => {
    return{
        type: types.CHANGE_MESSAGE,
        message
    }
}

export const deleteCartItem = (id) => {
    return{
        type: types.DELETE_CART_ITEM,
        id
    }
}

export const updateAddQuantity = (id) => {
    return{
        type: types.UPDATE_ADD_QUANTITY,
        id
    }
}

export const updateSubtractQuantity = (id) => {
    return{
        type: types.UPDATE_SUBTRACT_QUANTITY,
        id
    }
}