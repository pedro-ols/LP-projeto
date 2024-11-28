var showLess4 = document.getElementById("showLess4");
var carrersDiv = document.getElementById("carrers-div");

showLess4.addEventListener("click", function() {
    console.log('ativou função') 
    var display = window.getComputedStyle(carrersDiv).display;
    
    if(display !== "none"){
        carrersDiv.style.display = "none";
        showLess4.classList.remove("hide-button-active");
        showLess4.classList.add("hide-button");
        console.log('ativou if')
    }else{
        carrersDiv.style.display = "flex";
        showLess4.classList.remove("hide-button");
        showLess4.classList.add("hide-button-active");
        console.log('ativou else');
    };
});