const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link"),
    logIN = document.getElementById("logIN"),
    signup = document.getElementById("signup");

      

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    // signUp.addEventListener("click", ( )=>{
    //     container.classList.add("active");
    // });
    // login.addEventListener("click", ( )=>{
    //     container.classList.remove("active");
    // });
    logIN.addEventListener("click", () => {
    
        window.open('home.html', '_self');

    })
       
signup.addEventListener("click", () => {
    
        window.open('more_details.html', '_self');

    })
    
