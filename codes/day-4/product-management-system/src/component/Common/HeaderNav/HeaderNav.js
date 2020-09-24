import React from 'react'

function HeaderNav() {
    return (
        <div>
            <h1>Product Management System</h1>
            <nav className='navbar navbar-default'>
                <a href='/home'>
                    <button>Home</button>
                </a>
                <a href='/products'>
                    <button>Products</button>
                </a>
                <a href='/add'>
                    <button>Add</button>
                </a>
            </nav>
        </div>
    )
}

export default HeaderNav
