var menuBtn = document.getElementById("dropdownMenuButton");
var menuList = document.getElementById("dropdownmenulist");

menuBtn.addEventListener("click", function() {
    console.log('ativou função') 
    var display = window.getComputedStyle(menuList).display;
    
    if(display !== "none"){
        menuList.style.display = "none";
        console.log('ativou if')
    }else{
        menuList.style.display = "flex";
        console.log('ativou else');
    };
});