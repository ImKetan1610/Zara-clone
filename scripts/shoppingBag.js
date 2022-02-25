

    let zaraShoppingBag = JSON.parse(localStorage.getItem("zaraShoppingBag")) || [];
    let container = document.getElementById("container");
    displayProd(zaraShoppingBag);

    function displayProd(zaraShoppingBag) {
    console.log('zaraShoppingBag:', zaraShoppingBag)
        container.innerText="";
        zaraShoppingBag.forEach(function(element,i) {
            let prodDiv = document.createElement('div');

            let name = document.createElement("p")
            name.innerText = element.productName;

            let imgDiv = document.createElement("div");
            let img= document.createElement('img');
            img.src=element.productImg;
            imgDiv.append(img);

            let infoDiv = document.createElement('div');
            let ref = document.createElement('p');
            ref.innerText = `REF. | ${element.productColor}`;

            let price= document.createElement('p');
            price.innerText = `₹ ${element.productPrice} MRP incl. of all taxes`;

            // MRP incl. of all taxes ₹
    

            let del = document.createElement('p');
            del.innerText = "Delete";
            del.onclick = function(element,i) {
                console.log('i:', i)
                remove(element,i);
            }
            infoDiv.append(ref, price,del);
            totalSum(zaraShoppingBag)
            prodDiv.append(imgDiv,infoDiv);
            container.append(name,prodDiv);
        });

        function remove(element,i) {
        console.log('i:', i)
        zaraShoppingBag.splice(element,1)
        console.log('zaraShoppingBag:', zaraShoppingBag);
        localStorage.setItem("zaraShoppingBag",JSON.stringify(zaraShoppingBag));
        displayProd(zaraShoppingBag);
        totalSum(zaraShoppingBag);

        }

        function totalSum(zaraShoppingBag){
        let sum=0;
        for(let k = 0; k<zaraShoppingBag.length; k++){
            sum = sum + zaraShoppingBag[0].productPrice;
        }

        console.log(sum)

        let sumT = document.getElementById("total1");
        sumT.innerText = "Total "+ "-" + "₹" + sum + " " + "INCLUDING GST * EXCL SHIPPING COST";
        sumT.style.fontSize="10px";
        }
    }

    function checkout() {
        window.location.href = "./checkout.html"
    }

