var showLess3 = document.getElementById("news-show-less-btn");
var newsDiv = document.getElementById("news-row");

showLess3.addEventListener("click", function() {
    console.log('ativou função') 
    var display = window.getComputedStyle(newsDiv).display;
    
    if(display !== "none"){
        newsDiv.style.display = "none";
        showLess3.classList.remove("hide-button-active");
        showLess3.classList.add("hide-button");
        console.log('ativou if')
    }else{
        newsDiv.style.display = "flex";
        showLess3.classList.remove("hide-button");
        showLess3.classList.add("hide-button-active");
        console.log('ativou else');
    };
});