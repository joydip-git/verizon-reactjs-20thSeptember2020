import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import HeaderNav from '../../component/Common/HeaderNav/HeaderNav';
import ProductContainer from '../Product/ProductContainer';
import './App.css';
import Home from '../../component/Common/Home/Home'
import ProductDetail from '../../component/Product/ProductDetail/ProductDetail'
import ProductAdd from '../../component/Product/ProductAdd/ProductAdd'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderNav />
        <br />
        <Route path='/home' component={Home} />
        <Route path='/add' component={ProductAdd} />
        <Route path='/products' component={ProductContainer} />
        <Route path='/products/:id' component={ProductDetail} />
      </div>
    </BrowserRouter>
  );
}

export default App;
