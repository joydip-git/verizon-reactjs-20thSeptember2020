const numbers = [1, 2, 3];

function* iterateArray() {
    for (let i = 0; i < numbers.length; i++) {
        yield numbers[i];
    }
}
const iterator = iterateArray()
let res1 = iterator.next();
let res2 = iterator.next();
let res3 = iterator.next();
let res4 = iterator.next();
// console.log(res1)
// console.log(res2)
// console.log(res3)
// console.log(res4)

const fetchAllProducts = async () => {
    const response = await fetch('http://127.0.0.1:8081/productservice');;
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.Errors);
    }
    return data;
}

function login() {
    console.log('login')
}
function logout() {
    console.log('logout')
}
function* operate() {
    yield login();
    //yield fetchAllProducts();
    yield logout();
}

const operateIterator = operate();
operateIterator.next();
//.....
operateIterator.next();
