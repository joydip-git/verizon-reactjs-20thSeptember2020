import React, { Component } from 'react'
import ProductTable from '../../component/Product/ProductTable/ProductTable'
import { deleteProduct, getProducts } from '../../service/ProdudctService'
import './ProductContainer.css'

export class ProductContainer extends Component {
    state = {
        products: null,
        loaded: false
    }
    fetchProducts = () => {
        getProducts()
            .then(
                resp => {
                    this.setState({
                        products: resp.data,
                        loaded: true
                    })
                })
            .catch(e => console.log(e))
    }
    deleteProductHandler = (productId) => {
        deleteProduct(productId)
            .then(resp => {
                if (resp.statusText === 'OK') {
                    this.fetchProducts();
                }
            }) //{message:'', data:[]}
            .catch(e => console.log(e));
    }

    componentDidMount() {
        this.fetchProducts();
    }
    render() {
        let design = <span>products loading...</span>;
        if (this.state.loaded) {
            design = (
                <div className='panel panel-primary panelStyle'
                >
                    <div className='panel panel-heading'>
                        <h4>{this.state.products.length} Record(s) found...</h4>
                    </div>
                    <div className='panel panel-body'>
                        <ProductTable
                            productList={this.state.products}
                            removeProduct={this.deleteProductHandler} />
                    </div>
                </div>
            );
        }
        return design;
    }
}

export default ProductContainer
