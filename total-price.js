const cart = [
    { name: 'laptop', price: 40000, quantity: 1 },
    { name: 'shirt', price: 500, quantity: 8 },
    { name: 'watch', price: 3000, quantity: 3 },
    { name: 'phone', price: 500, quantity: 1 },
    { name: 'hadphone', price: 50, quantity: 1 }
];

let cartTotal = 0;
for (const product of cart) {
    const productTotal = product.price * product.quantity;
    cartTotal += productTotal;
}
console.log(cartTotal);

// let totalPrice = 0;
// for (const product of products) {
//     totalPrice += product.price;
// }

// console.log(totalPrice);