function logout(){
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    window.location.href="../logout.html"
}


// <<<<<<<<<<<<<below>>>>>>>>>login COde>>>>
function login() {
    let email,pass;
    email = document.getElementById("email").value
    pass = document.getElementById("pass").value
     if ( email == "" || pass == "") {
        alert("Please Fill the Email & Password")
    } else {
        let data = new Array()
        data = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
        if (data.some((v) => {
            return v.email == email && v.pass == pass
        })) {
            alert("login Succesfully");
            let currentUser = data.filter((v)=>{
                return v.email==email && v.pass==pass
            })[0]
            localStorage.setItem("name",currentUser.name)
            localStorage.setItem("email",currentUser.email)
             location.href="index.html"
            location.href="dashboard/dashboard.html"
        }
        else {
            alert("Login Fail Please Signup")
        };
    };
};
// <<<<<<<<<<<<<<<<Below signupcode>>>>>>>>>>

// const btnsignUp = document.getElementById("btnsignUp")

// btnsignUp.addEventListener("click",()=>{
function signup() {
    let user, email, pass;
    user = document.getElementById("user1").value
    email = document.getElementById("email1").value
    pass = document.getElementById("pass1").value
    if (user === "" || email === "" || pass === "") {
        alert("Please Fill The Requirement field 😊")
    } else {

        let data = new Array()
        data = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
        if (data.some((v) => {
            return v.email == email
        })) {
            alert("Dublicate Data");
        }
        else {
            data.push({
                "name": user,
                "email": email,
                "pass": pass
            })
            localStorage.setItem("users", JSON.stringify(data));
            alert("account has been created")
            window.location.href ="index.html"
        }
    }


}


    // })