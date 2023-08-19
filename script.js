var khatcontainer = document.getElementById("khatcontainer")
var mobilemenucontainer = document.getElementById("mobilemenucontainer")

var booli = false

function bazobaste() {
    if(booli){
        mobilemenucontainer.style.transform="translateY(-250px)"
        booli = false
    }
    else{
        mobilemenucontainer.style.transform="translateY(0px)"
        booli = true
    }

    console.log(booli)
}

khatcontainer.addEventListener("click", bazobaste)