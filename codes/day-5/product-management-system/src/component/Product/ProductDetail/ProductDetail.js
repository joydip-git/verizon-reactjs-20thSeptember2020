import React, { Component, useEffect, useState } from 'react'
import { Redirect, useHistory, useLocation, useParams } from 'react-router-dom'
import { getProductById } from '../../../service/ProdudctService'
import { fetchProductByIdAsync } from '../../../redux/actions/getProductActions'
import { connect, useSelector, useDispatch } from 'react-redux'

function ProductDetail(props) {
    console.log(props)
    const history = useHistory();
    console.log(history)
    const params = useParams();
    console.log(params);
    // const location = useLocation();

    const product = useSelector((state) => state.productState.product)
    const loading = useSelector((state) => state.productState.loading)
    const errorMessage = useSelector((state) => state.productState.errorMessage)
    const dispatch = useDispatch();

    const [redirectState, setRedirectState] = useState(false)
    useEffect(() => {
        // props.getProductById(parseInt(props.match.params.id))
        //props.getProductById(parseInt(params.id))
        dispatch(fetchProductByIdAsync(parseInt(params.id)))
        //componentWiilUnmount
        return () => {
            console.log('destroyed')
        }
    }, []);

    //10
    //'joydip'
    //[],
    //false
    //{}

    //return [referenceToState, fnToUpdateState] --> {redirect:false}
    // state = {
    //     product: null,
    //     redirect: false
    // }
    // componentDidMount() {
    //     this.props.getProductById(this.props.match.params.id);
    // }
    // componentWillUnmount() {
    //     console.log('destroyed...')
    // }
    const redirectHandler = () => {
        //props.history.push('/products');
        history.push('/products');
        //setRedirectState({ redirect: true });
        //setRedirectState(true);
        //setRedirectState(ps=>{return !ps})
    }
    const redirectToProducts = () => {
        // if (redirectState.redirect)
        if (redirectState)
            return <Redirect to='/products' />
    }


    return (
        <div>
            {loading ?
                <span>'loading...'</span>
                : product.productName
            }
            <br />
            <button onClick={redirectHandler}>OK</button>
            {/* <button onClick={() => this.setState({ redirect: true })}>OK</button>
                {this.redirectToProducts()} */}
            {/* {redirectToProducts()} */}
        </div>
    )
}
// const mapStateToProps = (state) => {
//     return {
//         product: state.productState.product,
//         loading: state.productState.loading,
//         errorMessage: state.productState.errorMessage
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getProductById: (id) => dispatch(fetchProductByIdAsync(id))
//     }
// }
// const connector = connect(mapStateToProps, mapDispatchToProps);
// export default connector(ProductDetail);

export default ProductDetail;
