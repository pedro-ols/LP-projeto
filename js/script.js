var hideButton = document.getElementById("hide-action-btn");
var groupImage = document.getElementById("group-image-div");

hideButton.addEventListener("click", function() {
    console.log('ativou função') 
    var display = window.getComputedStyle(groupImage).display;
    
    if(display !== "none"){
        groupImage.style.display = "none";
        hideButton.classList.remove("hide-button-active");
        hideButton.classList.add("hide-button");
        console.log('ativou if')
    }else{
        groupImage.style.display = "flex";
        hideButton.classList.remove("hide-button");
        hideButton.classList.add("hide-button-active");
        console.log('ativou else');
    };
});