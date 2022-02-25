
let selectedProduct = [];

function displayProduct(array, parent) {

    array.forEach(function (prod,i) {
        
        var div = document.createElement('div');
        div.setAttribute("id",'eachProduct');

        div.addEventListener("click", function(event) {
        
        selectedProduct.push(prod);
        console.log('selectedProduct:', selectedProduct)
        localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
        window.location.href="./selected.html";
        })

        var imgDiv = document.createElement('div')
        var img = document.createElement('img');
        img.src = prod.productImg;
        img.style.width = "100%";
        imgDiv.append(img);

        var infoDiv= document.createElement('div');
        var name = document.createElement('p');
        name.innerText = prod.productName;

        var price = document.createElement('p');
        price.innerText = `₹ ${prod.productPrice} MRP incl. of all taxes`;
        
        infoDiv.append(name,price);


        div.append(imgDiv,infoDiv);


        parent.append(div)
    })


}
export default displayProduct;