var button = document.getElementById("action-btn");
var container = document.getElementById("group-image");


button.addEventListener("click", function() {   
    console.log('ativou função') 
    
    if(container.style.display !== "none"){
        container.style.display = "none";
        console.log('ativou if')
    }else{
        container.style.display = "flex";
        console.log('ativou else')
    };
});