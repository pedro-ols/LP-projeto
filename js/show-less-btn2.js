var showLess2 = document.getElementById("interview-show-less-btn");
var interviewsDiv = document.getElementById("interviews-row");

showLess2.addEventListener("click", function() {
    console.log('ativou função') 
    var display = window.getComputedStyle(interviewsDiv).display;
    
    if(display !== "none"){
        interviewsDiv.style.display = "none";
        showLess2.classList.remove("hide-button-active");
        showLess2.classList.add("hide-button");
        console.log('ativou if')
    }else{
        interviewsDiv.style.display = "flex";
        showLess2.classList.remove("hide-button");
        showLess2.classList.add("hide-button-active");
        console.log('ativou else');
    };
});