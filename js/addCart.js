let cart = [
    {
        image:'none',
        product: 'Product',
        price: 'Price',
        quantity: 'Quantity'
    }
]


function auto() {
    let productTableTr = '<tr><th><img src="images/'+cart[0].image+'.jpg" alt="" class="cartImage">'+cart[0].product+'</th><th>'+cart[0].price+'</th><th>'+cart[0].quantity+'</th><th>Total</th></tr>'
    for (let index = 1; index < cart.length; index++) {
        productTableTr += '<tr><td><img src="images/'+cart[index].image+'" alt="" class="cartImage">'+cart[index].product+'</td><td>'+cart[index].price+'</td><td>'+cart[index].quantity+'</td><td>'+cart[index].quantity*cart[index].price+'</td><td><button style="font-size:24px" class="btn" value="'+index+'" onclick="deleteCart(this)"><i class="fa fa-trash-o" style="color:red"></i></button></td></tr>'
    }
    return productTableTr;
}
let deleteIndex = 0;
function deleteCart(index) {
    
    deleteIndex = index.value;
    cart = cart.filter(deleteItem);
    let totalCartValue = 0;
    for (let i = 1; i < cart.length; i++) {
        totalCartValue += cart[i].quantity
    }
    // count total 
    // print count and store count Number
    document.getElementById('cartCount').value = totalCartValue;
    document.getElementById('showCartValue').innerHTML = totalCartValue;
    showCartDetails()
}
function deleteItem(value,index) {
    return index != deleteIndex;
}

function showCartDetails() {
    document.getElementById('showCart').style.display = 'block'
    document.getElementById('productTable').innerHTML = auto();
    return productTableTr;
}
function AutoHiddenCartDetailsUpdate() {
    document.getElementById('productTable').innerHTML = auto();
    return productTableTr;
}




function closeCart() {
    document.getElementById('showCart').style.display = 'none';
    
}
// if (cart == null) {
//     cart.push(78989)
//     console.log(cart)
// }
console.log(cart.length)