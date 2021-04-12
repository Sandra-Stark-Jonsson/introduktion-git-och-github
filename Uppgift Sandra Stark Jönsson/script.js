"use strict";

function makeScheme(){

    for (let i=1; i<=4; i++){

        let div = document.createElement("div");
        document.getElementById("menu").append(div);
        div.setAttribute("id", `box${i}`);


        div.innerHTML = `
            <div id="color1"></div>
            <div id="color2"></div>
            <div id="color3">SCHEME ${i}</div>
            <div id="color4"></div>
            <div id="color5"></div>
        `; 
    }
}

makeScheme();


for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 5; j++) {
        document.querySelector(`#box${i} #color${j}`).style.backgroundColor = getColor(i, j);
        
    }
}


document.querySelector("#box1").classList.add("active");

document.querySelector(`#box1`).addEventListener("click", function(){
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#box1").classList.add("active");
    for (let i = 1; i <= 5; i++) {
        document.documentElement.style.setProperty(`--color${i}`, getColor(1, i));
    };
});
document.querySelector(`#box2`).addEventListener("click", function(){
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#box2").classList.add("active");
    for (let i = 1; i <= 5; i++) {
        document.documentElement.style.setProperty(`--color${i}`, getColor(2, i));
    };
});
document.querySelector(`#box3`).addEventListener("click", function(){
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#box3").classList.add("active");
    for (let i = 1; i <= 5; i++) {
        document.documentElement.style.setProperty(`--color${i}`, getColor(3, i));
    };
});
document.querySelector(`#box4`).addEventListener("click", function(){
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#box4").classList.add("active");
    for (let i = 1; i <= 5; i++) {
        document.documentElement.style.setProperty(`--color${i}`, getColor(4, i));
    };
});


 
    
document.getElementById("bigger").addEventListener("click", function(){
    document.documentElement.style.setProperty("--size", "350px");
});

document.getElementById("smaller").addEventListener("click", function(){
    document.documentElement.style.setProperty("--size", "40px");
});

document.getElementById("stop").addEventListener("click", function(){
    let sz = getComputedStyle(document.getElementById("first")).getPropertyValue("width");
    document.documentElement.style.setProperty("--size", sz);
});
