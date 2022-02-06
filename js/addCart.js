let cart = [
    {
        image:'none',
        product: 'Product',
        price: 'Price',
        quantity: 'Quantity'
    }
]
let buyProduct = []

// auto create table
function auto() {
    let productTableTr = '<tr><th>'+cart[0].product+'</th><th>'+cart[0].price+'</th><th>'+cart[0].quantity+'</th><th>Sub Total</th></tr>'
    for (let index = 1; index < cart.length; index++) {
        productTableTr += '<tr><td class="d-flex align-items-center"><img src="images/'+cart[index].image+'" alt="" class="cartImage">'+cart[index].product+'</td><td>Tk.'+cart[index].price+'</td><td>'+cart[index].quantity+'</td><td>Tk.'+cart[index].quantity*cart[index].price+'</td><td><button style="font-size:16px" class="btn bg-danger" value="'+index+'" onclick="deleteCart(this)"><i class="fa fa-trash-o" style="color:white"></i></button></td></tr>'
    }
    let totalPrice = 0
    for (let totalCountIndex = 1; totalCountIndex < cart.length; totalCountIndex++) {
        totalPrice += Number(cart[totalCountIndex].price);
        
    }
    productTableTr += '<tr><td></td><td></td><td>Total:</td><td>'+totalPrice+'</td></tr>'
    return productTableTr;
}
let deleteIndex = 0;
// deleteCart cart 
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
// delete a item from cart
function deleteItem(value,index) {
    return index != deleteIndex;
}

function showCartDetails() {
    // hidden searchbox
    document.getElementById('searchId').style.display = 'none'
    // hidden searchClose icon 
    document.getElementById('closeSearchBox').style.display = 'none'
    // visible searchShow icon 
    document.getElementById('showSearchBox').style.display = 'inline'
    // display show cart 
    document.getElementById('showCart').style.display = 'block'
    // hidden result table 
    document.getElementById('resultDiv').style.display = 'none'
    // function call for craete a table cart
    document.getElementById('productTable').innerHTML = auto();
    return productTableTr;
}
// hidden or display add to cart auto update 
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