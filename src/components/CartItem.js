import React, { Component } from 'react'
import * as messages from '../constants/message'

class CartItem extends Component {
    render() {
        const {item} = this.props
        return (
            <tr>
                <th scope="row">
                    <img src= {item.product.image}
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label onClick={(e) => this.onUpdateSubtractQuantity(e, item.product.id)}
                            className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light">
                            <a  href="a">—</a>
                        </label>
                        <label onClick={(e) => this.onUpdateAddQuantity(e, item.product.id)}
                            className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light">
                            <a  href="a">+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showTotal(item.product.price, item.quantity)}</td>
                <td>
                    <button 
                        onClick ={(e) => this.onDeleteCartItem(e, item.product.id)}
                        type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item">
                        X
                    </button>
                </td>
            </tr>
        )
    }

    onUpdateAddQuantity = (e, id) => {
        e.preventDefault()
        this.props.onUpdateAddQuantity(id)
        this.props.onChangeMessage(messages.MSG_UPDATE_CART_SUCCESS)
    }

    onUpdateSubtractQuantity = (e, id) => {
        e.preventDefault()
        this.props.onUpdateSubtractQuantity(id)
    }

    onDeleteCartItem = (e, id) => {
        e.preventDefault()
        this.props.onDeleteCartItem(id)
        this.props.onChangeMessage(messages.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
    }

    showTotal = (price, quantity) => {
        return price * quantity
    }
}

export default CartItem