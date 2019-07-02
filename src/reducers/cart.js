import * as types from './../constants/ActionTypes'

var data = JSON.parse(localStorage.getItem('cart'))

var initialState = data ? data : []

const cart = (state = initialState, action) => {
    var {product, quantity} = action
    var index
    switch(action.type){
        case types.ADD_TO_CART:
            index = findProductInCart(state, product)
            if(index !== -1){
                state[index].quantity += quantity
            } else{
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('cart', JSON.stringify(state))
            return [...state]

        case types.DELETE_CART_ITEM:
            state.forEach((item, index) => {
                if(item.product.id === action.id){
                    state.splice(index, 1)
                }
            });
            localStorage.setItem('cart', JSON.stringify(state))
            return [...state]
        
        case types.UPDATE_ADD_QUANTITY:
            state.forEach((item, index) => {
                if(item.product.id === action.id){
                    state[index].quantity += 1
                }
            })
            localStorage.setItem('cart', JSON.stringify(state))
            return [...state]

        case types.UPDATE_SUBTRACT_QUANTITY:
            state.forEach((item, index) => {
                if(item.product.id === action.id && item.quantity > 1){
                    state[index].quantity -= 1
                } else {
                    console.log("1 already")
                }
            })
            localStorage.setItem('cart', JSON.stringify(state))
            return [...state]
        default: return [...state]
    }
}

var findProductInCart = (cart, product) =>{
    var index = -1
    if(cart.length > 0){
        for(var i = 0; i < cart.length; i++){
            if(cart[i].product.id === product.id){
                index = i
                break
            }
        }
    }
    return index
}

export default cart