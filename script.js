var button = document.getElementById("button");
var user = document.getElementById("user");
var share_button = document.getElementById("share__button");
var share = document.getElementById("share");

button.onclick = function() {
    user.style.display = "none";
    share.style.display = "flex";
}

share_button.onclick = function(){
    share.style.display = "none";
    user.style.display = "flex";
}