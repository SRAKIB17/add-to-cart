const laptopProduct = [
    {
        Image: 'modern-15-01-228x228',
        price: 72000, quantity:45,
        model: 'MSI Modern 15 A11MU Core i5 11th Gen 15.6" FHD Laptop',
        detail:'Processor: Intel Core i5-1155G7 (8M Cache, 2.50 GHz up to 4.50 GHz)Memory: 8GB DDR4 3200MHz RAM Storage: 512GB NVMe PCIe Gen3x4 SSD 15.6" FHD (1920x1080) Display',
        category: 'laptop'
    },
    {
        Image: 'gf63-thin-01-228x228',
        price: 84000,
        quantity:45,
        model: 'MSI GF63 THIN 11SC Core i5 11th Gen GTX 1650 4GB Graphics 15.6" FHD Gaming Laptop',
        detail:'Intel Core i5-11400H Processor (12M Cache, 2.70 GHz up to 4.50 GHz)8GB DDR4 3200MHz RAM512GB NVMe PCIe Gen3x4 SSDNVIDIA GTX 1650 4GB GDDR6 Graphics',
        category: 'laptop'
    },
    {
        Image: 'modern-15-01-228x228',
        price: 88000, quantity:45,
        model: 'MSI Modern 15 A11SB Core i5 11th Gen MX450 2GB Graphics 15.6" FHD Gaming Laptop',
        detail:'Intel Core i5-1135G7 Processor (8M Cache, 2.40 GHz up to 4.20 GHz) 8GB DDR4 2666MHz RAM 512GB NVMe PCIe Gen3x4 SSD GeForce MX450 2GB Graphics',
        category: 'laptop'
    }
    
]
setTimeout(laptopDIV,200)
let productArray = [laptopProduct]
function laptopDIV() {
    let laptopColumn = ''
    for (let i = 0; i < laptopProduct.length; i++) {
        let getLaptop = laptopProduct[i]
        let getId = 'laptop-'+i+'-0';
        laptopColumn += '<div class="col-lg-4 col-sm-6"><div class="d-flex flex-column rounded-4 shadow-lg p-2 gap-2" style="height:70%;"><input type="text" id="getProductImage-'+getId+'" value="'+getLaptop.Image+'" hidden> <img src="images/'+getLaptop.Image+'.jpg" alt="" class="img-fluid h-25 w-100"><h6><input type="text" id="getProductModel-'+getId+'" value="'+getLaptop.model+'" hidden>'+getLaptop.model+'</h6><div class="d-flex justify-content-between"><h2>'+getLaptop.quantity+'</h2> <h2 class="text-warning"><input type="text" id="getProductPrice-'+getId+'" value="'+getLaptop.price+'" hidden>Tk.'+getLaptop.price+'</h2> </div><p>'+getLaptop.detail+'</p><div class="d-flex justify-content-between mt-5" ><input type="number" id="'+getId+'" class="w-25" min="1" value="1"><button class="btn bg-warning" value="'+getId+'" onclick="addToCart(this)"><i class="fa fa-shopping-cart" style="font-size:36px;color: whitesmoke;"></i></button></div></div></div>'
    }
    return document.getElementById('laptopSection').innerHTML = laptopColumn;
}

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
    
}