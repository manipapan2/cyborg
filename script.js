var khatcontainer = document.getElementById("khatcontainer")
var khatasl = document.getElementById("khatasl")
var khatbefore = document.querySelector(".khat-container div:nth-child(2)")
var khatafter = document.querySelector(".khat-container div:nth-child(3)")
var mobilemenucontainer = document.getElementById("mobilemenucontainer")

var booli = false

function bazobaste() {
    if(booli){
        mobilemenucontainer.style.transform="translateY(-250px)"
        khatbefore.style.transform="translateY(-10px) rotate(0deg)"
        khatbefore.style.width="21px"
        khatafter.style.transform="translateY(10px) rotate(0deg)"
        khatafter.style.width="21px"
        khatasl.style.opacity="1"
        booli = false
    }
    else{
        mobilemenucontainer.style.transform="translateY(0px)"
        khatbefore.style.transform="rotate(45deg)"
        khatbefore.style.width="30px"
        khatafter.style.transform="rotate(-45deg)"
        khatafter.style.width="30px"
        khatasl.style.opacity="0"
        booli = true
    }

    console.log(booli)
}

khatcontainer.addEventListener("click", bazobaste)