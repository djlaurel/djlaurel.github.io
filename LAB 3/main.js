function func1() {
    var menus = document.getElementsByClassName("menu");
    for (var i = 0; i < menus.length; i++) {
        menus[i].style.color = "darkblue";
    }
}
        
function func2() {
    var menus = document.getElementsByClassName("menu");
    for (var i = 0; i < menus.length; i++) {
        menus[i].style.color = "black";
    }
}

function myfunction() {
    var username = window.prompt("Enter your name");
}

function enlargeImg() {
    var imgs = document.getElementsByClassName("img-me");
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.transform = "scale(1.5)";
        imgs[i].style.transition = "transform 0.25s ease";
    }
}
