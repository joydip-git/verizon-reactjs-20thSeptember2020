import React from 'react'
import PropTypes from 'prop-types'
import ProductRow from '../ProductRow/ProductRow';

function ProductTable({ productList }) {
    return (
        <div className='table-responsive'>
            <table className='table'>
                <thead style={{ backgroundColor: "burlywood" }}>
                    <tr>
                        <td>Image</td>
                        <td>Name</td>
                        <td>Code</td>
                        <td>Price</td>
                        <td>Rating</td>
                        <td>Update</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map(
                            (p) => {
                                return <ProductRow key={p.productId}
                                    product={p} />
                            }
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

ProductTable.propTypes = {
    productList: PropTypes.array.isRequired
}

export default ProductTable


