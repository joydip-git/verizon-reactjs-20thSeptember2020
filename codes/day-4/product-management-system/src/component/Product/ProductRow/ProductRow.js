import React from 'react'
import PropTypes from 'prop-types'

function ProductRow({ product }) {
    return (
        <tr>
            <td>
                <div className='img-responsive'>
                    <img
                        src={product.imageUrl}
                        alt='NA'
                        title={product.productName}
                        className='imageStyle'
                    />
                </div>
            </td>
            <td>{product.productName}</td>
            <td>{product.productCode}</td>
            <td>{product.price}</td>
            <td>{product.starRating}</td>
            <td>
                <button className='btn btn-primary'>Update</button>
            </td>
            <td>
                <button className='btn btn-danger'>Delete</button>
            </td>
        </tr>
    )
}

ProductRow.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductRow

