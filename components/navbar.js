
function navbar() {
    return `
    <div id="mainHead">
        <div id="hamburger">
            <img src="https://www.freeiconspng.com/thumbs/menu-icon/menu-icon-24.png" alt="" srcset="">
        </div>
        <div id="zaraLogo">
            <a href="./index.html">
                <img src="https://1000logos.net/wp-content/uploads/2017/05/Zara-log%D0%BE-640x269.png" id="zaraLogoImg" alt="" srcset="">
            </a>
        </div>
        <div id="searchLogo">
            <button><a href="./search.html"><b>Search</b></a></button>
        </div>
        <div id="cartLogo">
            <div id="signin"><a href="./logIn.html">Log In</a></div> &nbsp;&nbsp;&nbsp;
            <div id="other"><a href="#">Help</a> &nbsp;&nbsp;&nbsp;
            <a href="./shoppingBag.html"><i class="fa fa-shopping-cart"></i></a></div>
        </div>
    </div>`;

}

export default navbar;
