import React, {Component} from 'react'
import {connect} from 'react-redux'
import Products from '../components/Products';
import Product from '../components/Product'
import PropTypes from 'prop-types'
import * as actions from '../actions/index';

class ProductsContainer extends Component {
    render(){
        const {products} = this.props
        return(
            <Products>
                {this.showProduct(products)}
            </Products>
        )
    }

    showProduct(products){
        var result = null
        if(products.length > 0){
            result = products.map((product, index) => {
                return <Product 
                    key={index}
                    product = {product}
                    onAddToCart = {this.props.onAddToCart}
                    onChangeMessage = {this.props.onChangeMessage}
                />
                
            })
        }
        return result
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string,
            image: PropTypes.string,
            description: PropTypes.String,
            price: PropTypes.number,
            rating: PropTypes.number
        })
    ).isRequired
}

const mapStateFromProps = (state) => {
    return{
        products: state.products,
        message: state.message
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        onAddToCart: (product, quantity) => {
            dispatch(actions.addToCart(product, quantity))
        },
        onChangeMessage: (message) => {
            dispatch(actions.changeMessage(message))
        }
    }
}

export default connect(mapStateFromProps, mapDispatchToProps)(ProductsContainer)