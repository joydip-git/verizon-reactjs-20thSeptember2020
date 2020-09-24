import React from 'react'
import { Link } from 'react-router-dom'

function HeaderNav() {
    return (
        <div>
            <h1>Product Management System</h1>
            <nav className='navbar navbar-default'>
                <Link to='/home'>
                    <button type='button' className='btn btn-group'>Home</button>
                </Link>
                <Link to='/products'>
                    <button type='button' className='btn btn-group'>Products</button>
                </Link>
                <Link to='/add'>
                    <button type='button' className='btn btn-group'>Add</button>
                </Link>
            </nav>
        </div>
    )
}

export default HeaderNav
