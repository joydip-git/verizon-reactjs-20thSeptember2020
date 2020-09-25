import React, { Component } from 'react'
import ProductTable from '../../component/Product/ProductTable/ProductTable'
import './ProductContainer.css'
import { connect } from 'react-redux'
import { fetchProductsAsync, getAllProductsInitiateActionCreator } from '../../redux/actions/getProductActions'

export class ProductContainer extends Component {

    deleteProductHandler = (productId) => {

    }

    componentDidMount() {
        this.props.getProducts();
    }
    render() {
        let design = <span>products loading...</span>;
        if (this.props.errorMessage !== '') {
            design = <span>{this.props.errorMessage}</span>
        }
        if (!this.props.loading) {
            design = (
                <div className='panel panel-primary panelStyle'
                >
                    <div className='panel panel-heading'>
                        <h4>{this.props.products.length} Record(s) found...</h4>
                    </div>
                    <div className='panel panel-body'>
                        <ProductTable
                            productList={this.props.products}
                            removeProduct={this.deleteProductHandler} />
                    </div>
                </div>
            );
        }
        return design;
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.allProductState.products,
        errorMessage: state.allProductState.errorMessage,
        loading: state.allProductState.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // getProducts: () => dispatch(fetchProductsAsync())
        getProducts: () => dispatch(getAllProductsInitiateActionCreator())
    }
}
const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(ProductContainer)
