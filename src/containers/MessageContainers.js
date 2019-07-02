import React, {Component} from 'react'
import Message from '../components/Message'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from '../actions/index'
import * as messages from '../constants/message'
class MessageContainers extends Component {

    render(){
        var {message} = this.props
        return(
            <Message message = {message}/>
        )
    }
}

MessageContainers.propTypes = {
    message: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
    return {
        message: state.message,
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(MessageContainers)