const btns = document.querySelectorAll(".explore_field_btn")
let header = document.querySelectorAll(".card_title")

function buy() {
    header[0].textContent = "create an account"
    header[1].textContent = "morgage calculator"
    header[2].textContent = "explore  available properties"
    header[3].textContent = "contact an agent"
}


function rent() {
    header[0].textContent = "set up your profile"
    header[1].textContent = "find a tenant"
    header[2].textContent = "looking for a flatmate?"
    header[3].textContent = "contact an agent"
}


function sell() {
    header[0].textContent = "create an account"
    header[1].textContent = "morgage calculator"
    header[2].textContent = "explore  available properties"
    header[3].textContent = "contact an agent"
}


function research() {
    header[0].textContent = "create an account"
    header[1].textContent = "morgage calculator"
    header[2].textContent = "explore  available properties"
    header[3].textContent = "contact an agent"
}

btns[0].addEventListener('click' , function(){
    buy()
})

btns[1].addEventListener('click' , function(){
    rent()
})

btns[2].addEventListener('click' , function(){
    sell()
})

btns[3].addEventListener('click' , function(){
    research()
})


console.log(btns)