
document.querySelector("form").addEventListener("submit",signup);

var zara_signup_array = JSON.parse(localStorage.getItem("zara_user_array")) || [];

function signup(event){
    event.preventDefault();

    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    var pincode = document.getElementById("pincode").value;
    var address = document.getElementById("address").value;
    var info = document.getElementById("info").value;
    var locality = document.getElementById("locality").value;
    var city = document.getElementById("city").value;
    var States = document.getElementById("myState").value;
    var country = document.getElementById("country").value;
    var phone = document.getElementById("phone").value;
    

    if(name==""||phone=="" || email=="" || pass==""||address==""||pincode==""||locality==""||city==""||States==""||country==""){
        alert("Please enter your Credentials")
    }

    else {
        var userCred = {
            userEmail:email,
            userName: name,
            userContact: phone,
            userPincode: pincode,
            userPass: pass,
            userAddress: address,
            userInfo: info,
            userLocality: locality,
            userCity: city,
            userState: States,
            userCountry: country
            }

    zara_signup_array.push(userCred);
    console.log('zara_signup_array:', zara_signup_array)
    localStorage.setItem("zara_user_array",JSON.stringify(zara_signup_array));
    alert("Signup successful");
    window.location.href="login.html"
    }

}
