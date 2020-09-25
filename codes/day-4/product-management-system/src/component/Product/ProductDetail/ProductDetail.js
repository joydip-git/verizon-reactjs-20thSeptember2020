import React, { Component, useEffect, useState } from 'react'
import { Redirect, useHistory, useLocation, useParams } from 'react-router-dom'
import { getProductById } from '../../../service/ProdudctService'

// class ProductDetail extends Component {
//     state = {
//         product: null
//     }
//     componentDidMount() {
//         console.log('called')
//         getProductById(parseInt(this.props.match.params.id))
//             .then(resp => {
//                 console.log(resp.data);
//                 this.setState({ product: resp.data })
//             })
//             .catch(e => console.log(e))
//     }
//     componentWillUnmount() {
//         console.log('destroyed...')
//     }
//     redirectHandler = () => {
//         this.props.history.push('/products');
//     }
//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 {this.state.product === null ? <span>'loading'</span> : this.state.product.productName}
//                 <br />
//                 <button onClick={this.redirectHandler}>OK</button>

//             </div>
//         )
//     }
// }

// export default ProductDetail
function ProductDetail() {
    //console.log(props);
    const history = useHistory();
    console.log(history)
    const params = useParams();
    console.log(params)
    const location = useLocation();
    const [productState, setProductState] = useState({ product: null });
    const [redirectState, setRedirectState] = useState(false);
    useEffect(function () {
        console.log('called')
        getProductById(parseInt(params.id))
            .then(resp => {
                console.log(resp.data);
                setProductState({ product: resp.data })
            })
            .catch(e => console.log(e))
        return () => {
            console.log('destroyed...')
        }
    }, []);

    const redirectHandler = () => {
        history.push('/products');
    }
    const redirect = () => {
        if (redirectState)
            return <Redirect to='/products' />
    }
    return (
        <div>
            {productState.product === null ? <span>'loading'</span> : productState.product.productName}
            <br />
            {/* <button onClick={redirectHandler}>OK</button> */}
            <button onClick={() => setRedirectState(true)}>Redirect</button>
            {redirect()}

        </div>
    )
}

export default ProductDetail
