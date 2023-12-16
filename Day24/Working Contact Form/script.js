//Making constant Variables from HTML File
const form = document.querySelector("form");
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

// Send Email Function
function sendEmail(){
    const bodyMessage = `Full Name: ${fullname.value}<br> Email : ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}<br>`;
    Email.send({
        SecureToken : "9de53b85-9adc-4bd7-aa11-75a93a87481e",
        To : 'vivekmangal204@gmail.com',
        From : "vivekmangal204@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message =>{
        if (message == "OK")
      {
        Swal.fire({
            title: "Suceess!",
            text : "Message Sent Successfully!",
            icon: "success"
        });
      }
    }
    );
}

// check Input Field Function
function checkInputs(){
    const items = document.querySelectorAll(".item");
    for(const item of items){
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        if(items[1].value != ""){
            checkEmail();
        }
        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if(item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else
            {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        })
    }
}

// Special Function to check Email
function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxtEmail = document.querySelector(".error-txt.email");

    if(!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if(email.value != ""){
            errorTxtEmail.innerText = "Enter a valid Email Address";
        }
        else{
            errorTxtEmail.innerText = "Email Address can't be blank";
        }
    }
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}


// Main Function
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if(!fullname.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")){
        sendEmail();

        form.reset();
        return false;
    }
    
});