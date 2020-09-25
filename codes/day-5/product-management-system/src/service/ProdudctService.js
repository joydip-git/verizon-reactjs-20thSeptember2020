import Axios from 'axios'

const url = 'http://127.0.0.1:8081/productservice'
export function getProducts() {
    return Axios.get(url);
}

export function getProductById(productId) {
    return Axios.get(url + '/' + productId);
}

export function addProduct(product) {
    return Axios.post(url, product);
}

export function updateProduct(product) {
    return Axios.put(url, product);
}

export function deleteProduct(productId) {
    return Axios.delete(`${url}/${productId}`);
}