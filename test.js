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
var result = []
function getResult(searchValue) {
    let getKey = new RegExp(searchValue,'gi')
    let matchLength = Number(searchValue.length);
    let matchSlice = ''
    let splitList = [];
    let addHtml = ''
    for (const productList of productArray) {
    
        for (let i = 0;i < productList.length;i++ ) {
            let getItem = productList[i];
            if (searchValue[0].match(/\s/g) || searchValue == '') {
                break
            }
            else if (getItem.model.search(getKey) >= 0 ) {
                // get push 
                result.push(getItem)
                let getIdOfProduct = result.indexOf(getItem);
                // get match index 
                let indexMatch = getItem.model.search(getKey);
                // count end index number 
                var totalIndex = (indexMatch + matchLength);
                // String slice 
                matchSlice = getItem.model.slice(indexMatch,totalIndex);
                /* create a array of String */
                splitList = getItem.model.split(matchSlice);
                /* html code add */
                addHtml = '<mark>'+matchSlice+'</mark>'
                // overright the array by splice
                splitList.splice(1,0,addHtml);
                // join String
                let joinSplice = splitList.join('')
                result[getIdOfProduct].model = joinSplice;
                console.log(getIdOfProduct)
            }
            else if ( getItem.category.search(getKey) >= 0 ) {
                // get push 
                result.push(getItem)
                let getIdOfProduct = result.indexOf(getItem);
                // get match index 
                let indexMatch = getItem.category.search(getKey);
                // count end index number 
                var totalIndex = (indexMatch + matchLength);
                // String slice 
                matchSlice = getItem.category.slice(indexMatch,totalIndex);
                /* create a array of String */
                splitList = getItem.category.split(matchSlice);
                /* html code add */
                addHtml = '<mark>'+matchSlice+'</mark>'
                // overright the array by splice
                splitList.splice(1,0,addHtml);
                // join String
                let joinSplice = splitList.join('')
                result[getIdOfProduct].category = joinSplice;
                console.log(getIdOfProduct)
            }
        }
    }
    console.log(matchSlice)
    return result;
}
console.log(getResult('man'))