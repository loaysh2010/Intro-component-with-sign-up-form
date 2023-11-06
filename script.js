let inputdivs = document.querySelectorAll(".input-elemnt");
let inputElements = document.querySelectorAll(".input-values");
let submitButton = document.querySelector("form");

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
}

submitButton.addEventListener("submit",function(event){
    for(let i=0;i<inputdivs.length;i++){
        value=inputElements[i].value;
        if(value == ""){
            inputdivs[i].classList.add("error");
            event.preventDefault();
        }
        else{
            inputdivs[i].classList.remove("error");
        }
        if(i==2){
            if(!validateEmail(value)){
                inputdivs[i].classList.add("error");
                event.preventDefault();
               }
        }
    }
});
console.log()

for (let i=0;i<inputElements.length;i++){
    inputElements[i].addEventListener("focus",function(event){
        this.parentElement.classList.remove("error");
    })
}

