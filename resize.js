spinner = document.getElementsByClassName("spinner")[0]

window.addEventListener("resize", reloadSpinner);

function reloadSpinner(){
    var content = spinner.innerHTML;
    spinner.innerHTML = content;
}