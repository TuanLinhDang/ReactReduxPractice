import React, {Component} from 'react'
import Cart from './../components/Cart'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult'
import * as messages from '../constants/message'
import * as actions from '../actions/index'
class CartContainers extends Component {
    render(){
        const {cart} = this.props
        return(
            <div>
                <Cart>
                    {this.showCartItem(cart)}
                    {this.showResult(cart)}
                </Cart>
            </div>
        )
    }

    showResult = (cart) => {
        var result = null
        if(cart.length > 0){
            result = <CartResult cart={cart}/>
        }
        return result
    }

    showCartItem = (cart) => {
        var result = <tr><td>{messages.MSG_CART_EMPTY}</td></tr>
        if(cart.length > 0){
            result = cart.map((item, index) => {
                return (
                    <CartItem key = {index}
                    item = {item}
                    index = {index}
                    onDeleteCartItem = {this.props.onDeleteCartItem}
                    onChangeMessage = {this.props.onChangeMessage}
                    onUpdateAddQuantity = {this.props.onUpdateAddQuantity}
                    onUpdateSubtractQuantity = {this.props.onUpdateSubtractQuantity}
                    />
                )
            })
        }
        return result
    }
}



const mapStateFromProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchFromProps = (dispatch, props) => {
    return {
        onDeleteCartItem: (id) => {
            dispatch(actions.deleteCartItem(id))
        },
        onChangeMessage: (message) => {
            dispatch(actions.changeMessage(message))
        },
        onUpdateAddQuantity: (id) => {
            dispatch(actions.updateAddQuantity(id))
        },
        onUpdateSubtractQuantity: (id) => {
            dispatch(actions.updateSubtractQuantity(id))
        }
    }
}


CartContainers.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }),
            quantity: PropTypes.number.isRequired
        }).isRequired
    )
}

export default connect(mapStateFromProps, mapDispatchFromProps)(CartContainers)