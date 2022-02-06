
function searchShow() {
    document.getElementById('showCart').style.display = 'none'
    document.getElementById('searchId').style.display = 'inline'
    document.getElementById('showSearchBox').style.display = 'none'
    document.getElementById('closeSearchBox').style.display = 'inline'
    document.getElementById('resultDiv').style.display = 'block'

}

function searchClose() {
    document.getElementById('resultDiv').style.display = 'none'
    document.getElementById('searchId').style.display = 'none'
    document.getElementById('closeSearchBox').style.display = 'none'
    document.getElementById('showSearchBox').style.display = 'inline'
}
var searchQuiry = ''

function searchProduct(search) {
    let resultArray = result
    let resultShow = '<tr class="w-100"><th>Product</th><th>Price</th><th>Details</th><th>Category</th></tr>'
    searchQuiry = document.getElementById('searchId').value;
    getResult(searchQuiry);
    if (resultArray.length == 0) {
        resultShow = 6456456
    }
    else {
        for (let i = 0; i < resultArray.length; i++) {
            document.getElementById('resultDiv').style.height = '60vh;'
            resultShow += '<tr class="w-100"><td><img src="images/'+resultArray[i].category+'/'+resultArray[i].Image+'" alt="" class="cartImage">'+resultArray[i].model+'</td><td>'+resultArray[i].price+'</td><td>'+resultArray[i].detail.substr(0,10)+'</td><td>'+resultArray[i].category+'</td></tr>'
        }
    }

    document.getElementById('resultDiv').innerHTML = resultShow;
    setInterval(searchProduct,2000);
    return result = [];
    

}