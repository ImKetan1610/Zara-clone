let b =JSON.parse(localStorage.getItem("selectedProduct"))
appendSelected(b)
// document.querySelector("body").append(JSON.stringify(a));

function appendSelected(a) {

    a.forEach(ele => {
    let mainDiv=document.createElement("div");
    mainDiv.id="mainDiv";

    let infoDiv=document.createElement("div");
    let title1 = document.createElement('h3');
    title1.innerText = "MATERIALS, CARE AND ORIGIN";

    let title2 = document.createElement('h3');
    title2.innerText = "MATERIALS";

    let material = document.createElement('p');
    material.innerText = ele.productMaterial;

    let title3 = document.createElement('h3');
    title3.innerText = "CARE"

    let care = document.createElement('p');
    care.innerText = ele.productCare;

    infoDiv.append(title1,title2,material,title3,care);

    let imgDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src=ele.productImg;
    imgDiv.append(img);

    let priceDiv=document.createElement("div");
    let name = document.createElement('h3');
    name.innerText = ele.productName;

    let desc = document.createElement('p');
    desc.innerText = ele.productShortDesc;

    let color = document.createElement('p');
    color.innerText = ele.productColor;

    let price = document.createElement('p');
    price.innerText = `₹ ${ele.productPrice} MRP incl. of all taxes`;

    let button = document.createElement("button");
    button.innerText = "Add to Bag";
    button.onclick=function (event) {
        // console.log('ele:', ele);
        addToBag(ele)
    }

    priceDiv.append(name,desc,color,price,button);

    mainDiv.append(infoDiv,imgDiv,priceDiv);
    document.getElementById("container").append(mainDiv);
});

}

function addToBag(ele) {
    // console.log('a:', ele)
    let zaraShoppingBag= JSON.parse(localStorage.getItem("zaraShoppingBag")) || [];
    zaraShoppingBag.push(ele);
    localStorage.setItem("zaraShoppingBag",JSON.stringify(zaraShoppingBag));
}