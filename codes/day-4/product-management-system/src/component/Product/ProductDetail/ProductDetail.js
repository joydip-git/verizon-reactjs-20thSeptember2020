import React, { Component } from 'react'
import { getProductById } from '../../../service/ProdudctService'

class ProductDetail extends Component {
    state = {
        product: null
    }
    componentDidMount() {
        console.log('called')
        getProductById(parseInt(this.props.match.params.id))
            .then(resp => {
                console.log(resp.data);
                this.setState({ product: resp.data })
            })
            .catch(e => console.log(e))
    }
    componentWillUnmount() {
        console.log('destroyed...')
    }
    redirectHandler = () => {        
        this.props.history.push('/products');
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {this.state.product === null ? <span>'loading'</span> : this.state.product.productName}
                <br />
                <button onClick={this.redirectHandler}>OK</button>
            </div>
        )
    }
}

export default ProductDetail
