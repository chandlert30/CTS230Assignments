myitem = document.getElementById("firsttest");
myitem.addEventListener("click",onClick);
myitem.addEventListener("mouseover",onMouseOver);
myitem.addEventListener("mouseout", onMouseOut);
thebutton = document.getElementById("thebutton");
otheritem = document.getElementById("buttontest");
thebutton.addEventListener("click", onButtonClick);

yessir = document.getElementById("yessir");
manitem = document.getElementById("buttonyear");
yessir.addEventListener("click", onClick);

textentry = document.getElementById("myinput");
textentry.addEventListener("change", onChange);

function onChange() {
    newtext = myinput.value;
    otheritem.innerHTML = newtext;
}




function onClick() {
    myitem.style.color = "green";
    myitem.style.fontSize = "2em";
    myitem.style.fontStyle = "italic";
}

function onMouseOver() {
    myitem.style.color = "red";
    myitem.style.fontSize = "1.5em";
}

function onMouseOut() {
    myitem.style.color = "black";
    myitem.style.fontSize = "1em";
}

function onButtonClick() {
    otheritem.style.color = "blue";
    
}

function onClick() {
manitem.style.fontSize = "3em";
}





