var hideButton = document.getElementById("hide-action-btn");
var groupImage = document.getElementById("group-image-div");

hideButton.addEventListener("click", function() {
    console.log('ativou função') 
    var display = window.getComputedStyle(groupImage).display;
    
    if(display !== "none"){
        groupImage.style.display = "none";
        console.log('ativou if')
    }else{
        groupImage.style.display = "flex";
        console.log('ativou else')
    };
});