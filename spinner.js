var front = document.getElementsByClassName("front")[0]
var back = document.getElementsByClassName("back")[0]
var spinner = document.getElementsByClassName("spinner")[0]

window.addEventListener("resize", reloadSpinner);

/* spinner.onmouseenter = function(){
    reloadSpinner();
    spinner = document.getElementsByClassName("spinner")[0];
    console.log("spinner.onmouseenter");
    front.classList.remove('front-tofront');
    front.classList.add('front-toback');
    back.classList.remove('back-tofront');
    back.classList.add('back-toback');
}

spinner.onmouseleave = function(){
    reloadSpinner();
    spinner = document.getElementsByClassName("spinner")[0];
    console.log("spinner.onmouseleave");
    front.classList.remove('front-toback');
    front.classList.add('front-tofront');
    back.classList.remove('back-toback');
    back.classList.add('back-tofront');
} */

function reloadSpinner(){
    var newone = spinner.cloneNode(true);
    spinner.parentNode.replaceChild(newone, spinner);
    spinner = document.getElementsByClassName("spinner")[0];
}