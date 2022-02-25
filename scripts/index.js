


let zara_user_array=JSON.parse(localStorage.getItem("zara_user_array")) || [];
let zaraAuthUser=JSON.parse(localStorage.getItem("zaraAuthuser"))

if(zaraAuthUser!=null){
        document.querySelector("#signin").innerHTML=`<a href="#"> ${zaraAuthUser.name} </a>`;
        console.log('zaraAuthUser:', zaraAuthUser)

}
var indexValue = 1;
showImg(indexValue);

function side_slide(e) {
    showImg(indexValue +=e)
}

function showImg(e) {
    // console.log('e:', e)
    var i;
    const img = document.querySelectorAll(".category");
    if(e> img.length) {
        indexValue=1
    }
    if(e < 1) {
        indexValue = img.length
    }
    for(i = 0; i<img.length; i++){
        img[i].style.display = "none";
    }
    img[indexValue - 1].style.display = "block";
}

function women(){
    window.location.href="women.html"
}

function men(){
    window.location.href="men.html"
}

function kid(){
    window.location.href="kid.html"
}
