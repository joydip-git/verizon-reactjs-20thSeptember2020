import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { getProductById } from '../../../service/ProdudctService'
import { fetchProductByIdAsync } from '../../../redux/actions/getProductActions'
import { connect } from 'react-redux'

class ProductDetail extends Component {
    // state = {
    //     product: null,
    //     redirect: false
    // }
    componentDidMount() {
        this.props.getProductById(this.props.match.params.id);
    }
    componentWillUnmount() {
        console.log('destroyed...')
    }
    redirectHandler = () => {
        this.props.history.push('/products');
    }
    // redirectToProducts = () => {
    //     if (this.state.redirect)
    //         return <Redirect to='/products' />
    // }
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.loading ?
                    <span>'loading...'</span>
                    : this.props.product.productName
                }
                <br />
                <button onClick={this.redirectHandler}>OK</button>
                {/* <button onClick={() => this.setState({ redirect: true })}>OK</button>
                {this.redirectToProducts()} */}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        product: state.productState.product,
        loading: state.productState.loading,
        errorMessage: state.productState.errorMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProductById: (id) => dispatch(fetchProductByIdAsync(id))
    }
}
const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(ProductDetail);
