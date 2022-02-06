// searchShow with display search blox

function searchShow() {
    document.getElementById('showCart').style.display = 'none'
    document.getElementById('searchId').style.display = 'inline'
    document.getElementById('showSearchBox').style.display = 'none'
    document.getElementById('closeSearchBox').style.display = 'inline'
    document.getElementById('resultDiv').style.display = 'block'
    // auto call 
    searchControl('start')
}
// hidden all of search and show searchShow icon 
function searchClose() {
    document.getElementById('resultDiv').style.display = 'none'
    document.getElementById('searchId').style.display = 'none'
    document.getElementById('closeSearchBox').style.display = 'none'
    document.getElementById('showSearchBox').style.display = 'inline'
    searchControl('stop')
}
// search product function
function searchControl(signal) {
    let autoTime = setInterval(searchProduct,1000);
    if (signal == 'start') {
        return autoTime
    }
    else {
        let clear = clearInterval(autoTime);
        return clear;
    }
}
var searchQuiry = ''

function searchProduct() {
    let resultShow = '<tr class="w-100"><th>Product</th><th>Price</th><th>Details</th><th>Category</th></tr>'
    
    searchQuiry = document.getElementById('searchId').value;
    let resultArray = getResult(searchQuiry);

    if (resultArray.length == 0) {
        resultShow = '<div><h2 class="searchNotFound">Not Found</h2></div>'
    }
    else {
        for (let i = 0; i < resultArray.length; i++) {
            let getId = resultArray[i].category+'-'+i+'-0';
            resultShow += '<tr class="w-100"><td><img src="images/'+resultArray[i].category+'/'+resultArray[i].Image+'" alt="" class="cartImage">'+resultArray[i].model.substr(0,10)+'</td><td>'+resultArray[i].price+'</td><td>'+resultArray[i].detail.substr(0,10)+'</td><td>'+resultArray[i].category+'</td><td><button class="btn bg-warning" value="'+getId+'" onclick="addToCart(this)"><i class="fa fa-shopping-cart" style="font-size:24px;color: whitesmoke;"></i></button></td></tr>'
        }
    }

    document.getElementById('resultDiv').innerHTML = resultShow;
    
    return result = [];
}