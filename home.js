// console.log("Hello World"); //making sure this script is linked to the html page.

window.onload = () => {
    document.getElementsByClassName("pick-starter")[0].onclick = () => {
        window.open("pick-starter.html", "_self");
    }
    // document.getElementsByClassName("pokedex")[0].onclick = () => {
    //     window.open("pokedex.html", "_self");
    // }
    document.getElementsByClassName("about")[0].onclick = () => {
        window.open("about-dev.html", "_self");
    }
}