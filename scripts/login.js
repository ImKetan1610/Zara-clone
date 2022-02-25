
    function register() {
        window.location.href="./register.html";
    }    


document.querySelector("form").addEventListener("submit",logIn);

var zara_user_log =JSON.parse(localStorage.getItem("zara_user_array")) || [];
console.log('zara_user_log:', zara_user_log)


function logIn(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    
    for(var i = 0; i < zara_user_log.length; i++){
        if(zara_user_log[i].userEmail == email && zara_user_log[i].userPass == pass){
            let name = zara_user_log[i].userName;
            let zaraAuthUser ={
                name,
            };
            localStorage.setItem('zaraAuthUser:', JSON.stringify(zaraAuthUser))
            console.log('zaraAuthUser:', zaraAuthUser)
            alert("Login Successful")
            window.location.href = "./index.html"
            return;
        }
    }
    alert("Invalid Credentials");
    return;

}