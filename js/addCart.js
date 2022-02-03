let cart = [
    {
        image:'none',
        product: 'Product',
        price: 'Price',
        quantity: 'Quantity'
    }
]
let cartCount = []
let productTableTr = '<tr><th><img src="images/'+cart[0].image+'.jpg" alt="" class="cartImage">'+cart[0].product+'</th><th>'+cart[0].price+'</th><th>'+cart[0].quantity+'</th><th>Total</th></tr>'
function auto() {
    for (let index = 1; index < cart.length; index++) {
        productTableTr += '<tr><td><img src="images/'+cart[index].image+'.jpg" alt="" class="cartImage">'+cart[index].product+'</td><td>'+cart[index].price+'</td><td>'+cart[index].quantity+'</td><td>'+cart[index].quantity*cart[index].price+'</td></tr>'
    }
    return productTableTr;
}


function showCartDetails() {
    document.getElementById('showCart').style.display = 'block'
    document.getElementById('productTable').innerHTML = auto();
}




function closeCart() {
    document.getElementById('showCart').style.display = 'none';
    
}
// if (cart == null) {
//     cart.push(78989)
//     console.log(cart)
// }
console.log(cart.length)