function addToCart(countColumn) {

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
function buyNow(ProductId) {
    // input getId
    let getId = ProductId.value;
    document.getElementById('BuyNow-'+getId).style.display = 'block';
    // document.getElementById('BuyNow-'+value.value).style.transform = 'scale(1.4)';
    
    let countBuyProduct = Number(document.getElementById(getId).value);

    // separate for get item code with item Main Product;
        // get Image
    let buyImage = document.getElementById('getProductImage-'+getId).value;
        // get model or product 
    let buyProductModel = document.getElementById('getProductModel-'+getId).value;
        // get quantity
    let buyQuantity = countBuyProduct;
        // get item price
    let buyPrice = document.getElementById('getProductPrice-'+getId).value;
    
    // count total 
    let totalProductValue = buyQuantity * buyPrice;
    // add item on cart Object
    let creatBuyObject =  {
        image:'none',
        product: 'none',
        price: 0,
        quantity: 0
    }
    
    buyProduct.push(creatBuyObject);
    buyProduct[buyProduct.length-1].image = buyImage;
    buyProduct[buyProduct.length-1].product = buyProductModel;
    buyProduct[buyProduct.length-1].price = buyPrice;
    buyProduct[buyProduct.length-1].quantity = buyQuantity;

    // create table
    let table = '<table class="w-100"><caption>Show Details</caption><tr><td><img src="images/'+buyImage+'" alt="" class="cartImage"></td><td colspan="2">'+buyProductModel+'</td></tr><tr><td>Quantity:  </td><td class="text-center">'+buyQuantity+'</td><td rowspan="3"><button class="btn bg-warning" value="'+0+'" onclick="addToCart(this)" style="font-size:24px;color: whitesmoke;">Buy</button></td></tr><tr><td>Price:</td><td>Tk.'+buyPrice+'</td></tr><tr><td>Total:</td><td>Tk.'+totalProductValue+'</td></tr></table>'

    document.getElementById('buyNowBody-'+getId).innerHTML = table;
}
function closeBuy(getId) {
        document.getElementById('BuyNow-'+getId.value).style.display = 'none';
        document.getElementById('BuyNow-'+value.value).style.transform = 'scale(1.4)';
        
}