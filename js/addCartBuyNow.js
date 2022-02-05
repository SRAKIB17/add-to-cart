function addToCart(countColumn) {
    let getCart = cart;

    // get cart count 
    let getCartValue = Number(document.getElementById('cartCount').value);

    // input getId
    let getId = countColumn.value;
    let countCartProduct = Number(document.getElementById(getId).value);

    // separate for get item code with item Main Product;
        // get Image
    let cartImage = document.getElementById('getProductImage-'+getId).value;
        // get model or product 
    let cartProductModel = document.getElementById('getProductModel-'+getId).value;
        // get quantity
    let cartQuantity = countCartProduct;
        // get item price
    let cartPrice = document.getElementById('getProductPrice-'+getId).value;
    
    // count total 
    let totalCartValue = getCartValue + countCartProduct;

    // print count and store count Number
    document.getElementById('cartCount').value = totalCartValue;
    document.getElementById('showCartValue').innerHTML = totalCartValue;
    // add item on cart Object
    let creatObject =  {
        image:'none',
        product: 'none',
        price: 0,
        quantity: 0
    }
    
    cart.push(creatObject);
    cart[cart.length-1].image = cartImage;
    cart[cart.length-1].product = cartProductModel;
    cart[cart.length-1].price = cartPrice;        cart[cart.length-1].quantity = cartQuantity;
    AutoHiddenCartDetailsUpdate()
}
function buyNow(getId) {
        document.getElementById('BuyNow-'+getId.value).style.display = 'block';
        document.getElementById('BuyNow-'+value.value).style.transform = 'scale(1.4)';
        
}
function closeBuy(getId) {
        document.getElementById('BuyNow-'+getId.value).style.display = 'none';
        document.getElementById('BuyNow-'+value.value).style.transform = 'scale(1.4)';
        
}