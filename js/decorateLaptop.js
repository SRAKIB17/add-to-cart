/* _--------------------
-For laptop product
-------------------------*/
let laptopProduct = [
    {
        Image: 'modern-15-01-228x228.jpg',
        price: 72000, 
        quantity: 5,
        model: 'MSI Modern 15 A11MU Core i5 11th Gen 15.6" FHD Laptop',
        detail:'Processor: Intel Core i5-1155G7 (8M Cache, 2.50 GHz up to 4.50 GHz)Memory: 8GB DDR4 3200MHz RAM Storage: 512GB NVMe PCIe Gen3x4 SSD 15.6" FHD (1920x1080) Display',
        category: 'Laptop'
    },
    {
        Image: 'gf63-thin-01-228x228.jpg',
        price: 84000,
        quantity:50,
        model: 'MSI GF63 THIN 11SC Core i5 11th Gen GTX 1650 4GB Graphics 15.6" FHD Gaming Laptop',
        detail:'Intel Core i5-11400H Processor (12M Cache, 2.70 GHz up to 4.50 GHz)8GB DDR4 3200MHz RAM512GB NVMe PCIe Gen3x4 SSDNVIDIA GTX 1650 4GB GDDR6 Graphics',
        category: 'Laptop'
    },
    {
        Image: 'modern-15-01-228x228.jpg',
        price: 88000,
        quantity:5,
        model: 'MSI Modern 15 A11SB Core i5 11th Gen MX450 2GB Graphics 15.6" FHD Gaming Laptop',
        detail:'Intel Core i5-1135G7 Processor (8M Cache, 2.40 GHz up to 4.20 GHz) 8GB DDR4 2666MHz RAM 512GB NVMe PCIe Gen3x4 SSD GeForce MX450 2GB Graphics',
        category: 'Laptop'
    }
]
/*=---------------------
for women jacket product
---------------------------*/
let WomenjacketProduct = [
    {
        Image: 'jacket-1.png',
        price: 720, 
        quantity: 5,
        model: 'Yellow Coat Jacket ',
        detail:'Processor: Intel Core i5-1155G7 (8M Cache, 2.50 GHz up to 4.50 GHz)Memory: 8GB DDR4 3200MHz RAM Storage: 512GB NVMe PCIe Gen3x4 SSD 15.6" FHD (1920x1080) Display',
        category: 'Women Jacket'
    },
    {
        Image: 'jacket-2.png',
        price: 840,
        quantity:50,
        model: 'Ladies Jacket',
        detail:'Bfjdsodsfdlskjd<br>sdsgjfsdotgfsdtgifsdjljgfdjgfdglfdjgfd<br>lgjfdgjfdgfdjgj',
        category: 'Women Jacket'
    },
    {
        Image: 'jacket-3.png',
        price: 800,
        quantity:5,
        model: 'Woman Leather Jacket',
        detail:'IntgfdgfgggfgfgfgCIe Gen3x4 SSD GeForce MX450 2GB Graphics',
        category: 'Women Jacket'
    }
]
/*=---------------------
for men jacket product
---------------------------*/
let ManjacketProduct = [
    {
        Image: 'jacket-4.png',
        price: 720, 
        quantity: 5,
        model: 'nowboard Jacket Mens',
        detail:'Processor: Intel Core i5-1155G7 (8M Cache, 2.50 GHz up to 4.50 GHz)Memory: 8GB DDR4 3200MHz RAM Storage: 512GB NVMe PCIe Gen3x4 SSD 15.6" FHD (1920x1080) Display',
        category: 'Man Jacket'
    },
    {
        Image: 'jacket-5.png',
        price: 840,
        quantity:50,
        model: 'Man Leather Jacket',
        detail:'Bfjdsodsfdlskjd<br>sdsgjfsdotgfsdtgifsdjljgfdjgfdglfdjgfd<br>lgjfdgjfdgfdjgj',
        category: 'Man Jacket'
    },
    {
        Image: 'jacket-6.png',
        price: 800,
        quantity:5,
        model: 'Man Casual Jacket',
        detail:'IntgfdgfgggfgfgfgCIe Gen3x4 SSD GeForce MX450 2GB Graphics',
        category: 'Man Jacket'
    }
]
/*=---------------------
for shoes product
---------------------------*/
let shoesProduct = [
    {
        Image: 'shoe-1.png',
        price: 720, 
        quantity: 5,
        model: 'nowboard Jacket Mens',
        detail:'Processor: Intel Core i5-1155G7 (8M Cache, 2.50 GHz up to 4.50 GHz)Memory: 8GB DDR4 3200MHz RAM Storage: 512GB NVMe PCIe Gen3x4 SSD 15.6" FHD (1920x1080) Display',
        category: 'Shoes'
    },
    {
        Image: 'shoe-2.png',
        price: 1840,
        quantity:50,
        model: 'Man Leather Jacket',
        detail:'Bfjdsodsfdlskjd<br>sdsgjfsdotgfsdtgifsdjljgfdjgfdglfdjgfd<br>lgjfdgjfdgfdjgj',
        category: 'Shoes'
    },
    {
        Image: 'shoe-3.png',
        price: 800,
        quantity:5,
        model: 'Man Casual Jacket',
        detail:'IntgfdgfgggfgfgfgCIe Gen3x4 SSD GeForce MX450 2GB Graphics',
        category: 'Shoes'
    }
]
/*=---------------------
for bags product
---------------------------*/
let bagsProduct = [
    {
        Image: 'bag-1.png',
        price: 720, 
        quantity: 5,
        model: 'nowboard Jacket Mens',
        detail:'Processor: Intel Core i5-1155G7 (8M Cache, 2.50 GHz up to 4.50 GHz)Memory: 8GB DDR4 3200MHz RAM Storage: 512GB NVMe PCIe Gen3x4 SSD 15.6" FHD (1920x1080) Display',
        category: 'Bags'
    },
    {
        Image: 'bag-2.png',
        price: 1840,
        quantity:50,
        model: 'Man Leather Jacket',
        detail:'Bfjdsodsfdlskjd<br>sdsgjfsdotgfsdtgifsdjljgfdjgfdglfdjgfd<br>lgjfdgjfdgfdjgj',
        category: 'Bags'
    },
    {
        Image: 'bag-3.png',
        price: 800,
        quantity:5,
        model: 'Man Casual Jacket',
        detail:'IntgfdgfgggfgfgfgCIe Gen3x4 SSD GeForce MX450 2GB Graphics',
        category: 'Bags'
    }
]

var productArray = [laptopProduct, WomenjacketProduct, ManjacketProduct,shoesProduct,bagsProduct];

// waiting 
setTimeout(waiting,100)
function waiting() {
    let wait = '<div><img src="images/busy.gif" alt=""></div>'
    document.getElementById('productDivId').innerHTML = wait;
    setTimeout(laptopDIV,1500)
}



function laptopDIV() {
    let productDIV = ''
    let indexA = 0;
    while (indexA < productArray.length) {
        let productItem = productArray[indexA];
        let getProductTitle = productItem[0].category;
        productDIV += '<section class="container mb-3"><div class="row g-2" id="laptopSection"><h2>'+getProductTitle+'</h2><!-- laptopProduct -->'
        for (let i = 0; i < productItem.length; i++) {
            let getProductItem = productItem[i];

            let getId = getProductItem.category+'-'+i+'-0';
            productDIV += '<div class="col-xs-12 col-lg-4 col-sm-6 item rounded-3 p-4 d-flex flex-column position-relative"><div class="h-100 position-relative"><input type="text" id="getProductImage-'+getId+'" value="'+getProductItem.category+'/'+getProductItem.Image+'" hidden> <img src="images/'+getProductItem.category+'/'+getProductItem.Image+'" alt="" class="img-fluid"><h4><input type="text" id="getProductModel-'+getId+'" value="'+getProductItem.model+'" hidden>'+getProductItem.model+'</h4><div class="d-flex justify-content-between"><h2>Stock:'+getProductItem.quantity+'</h2> <h2 class="text-warning"><input type="text" id="getProductPrice-'+getId+'" value="'+getProductItem.price+'" hidden>Tk.'+getProductItem.price+'</h2> </div><p>'+getProductItem.detail+'</p><div class="d-flex buyNowSection justify-content-between mt-1 align-self-end position-absolute bottom-0" ><input type="number" id="'+getId+'" class="w-25" min="1" value="1"><button class="btn bg-warning" value="'+getId+'" onclick="buyNow(this)"><i class="fa fa-shopping-bag" style="font-size:24px;color: whitesmoke;"></i></button><button class="btn bg-warning" value="'+getId+'" onclick="addToCart(this)"><i class="fa fa-shopping-cart" style="font-size:24px;color: whitesmoke;"></i></button></div></div><div id="BuyNow-'+getId+'" class="buyNow position-absolute bottom-0 w-100"><button class="btn bg-danger position-absolute end-0 bottom-0 text-white" value="'+getId+'" onclick="closeBuy(this)">X</button><div id="buyNowBody-'+getId+'"></div></div></div>'
        }
        productDIV += '</div></section>'
        indexA ++
    }
    return document.getElementById('productDivId').innerHTML = productDIV;
}
// searchValue function 
var result = []
function getResult(searchValue) {
    for (const productList of productArray) {
    
        for (const getItem of productList) {
            if (searchValue[0].match(/\s/g) || searchValue == '') {
                break
            }
            else if (getItem.model.includes(searchValue) || getItem.category.includes(searchValue)) {
                result.push(getItem)
            }
        }
    }
    return result;
}

