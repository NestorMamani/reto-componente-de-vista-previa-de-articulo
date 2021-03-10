var button = document.getElementById("button");
var user = document.getElementById("user");
var share_button = document.getElementById("share__button");
var share = document.getElementById("share");
var triangle = document.getElementById("triangle");

if(screen.width < 1000){
    share.style.position = "relative";
    button.onclick = function() {
        user.style.display = "none";
        share.style.display = "flex";
    }
    
    share_button.onclick = function(){
        share.style.display = "none";
        user.style.display = "flex";
    }
} else{
    share_button.style.display ="none";
    share.style.position = "absolute";
    button.onclick = function(){
        if(share.style.display == "none"){
            share.style.display = "flex";
            triangle.style.display = "flex";          
        } else{
            share.style.display = "none";
            triangle.style.display = "none";
        }
    }
}
