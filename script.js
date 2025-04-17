function changeText() {
    document.getElementById("heading").innerHTML = "You clicked the button!";
}

function changeColor() {
    document.getElementById("heading").style.color = "green";
}

function addElement() {
    var para = document.createElement("p");
    para.innerHTML = "This is a new paragraph.";
    document.getElementById("myDiv").appendChild(para);
}

function removeElement() {
    var div = document.getElementById("myDiv");
    if (div.lastChild) {
        div.removeChild(div.lastChild);
    }
}
