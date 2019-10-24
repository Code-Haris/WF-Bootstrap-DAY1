var str = document.getElementById('pid').innerHTML;
var tr = document.getElementsByClassName("row");
var num = 5;
var maxLength = str.length;
var p = 0;
console.log(str.length);

document.getElementById('container').setAttribute("class", "container-fluid");
document.getElementById('row').setAttribute("class", "row");
var row = document.createElement("div");

for (i = 0; i < num; i++) {
    var pdiv = document.createElement("div").setAttribute("class", "col-sm");
    var paragraph = document.createElement("div");
    paragraph.className = "col-sm";

    row.setAttribute("id", i);
    //-------reiterate cutting point on string------------------------
    var n = Math.floor(maxLength / num);
    p += n;
    console.log(p);

    var trim = str.substr(p - n, Math.floor(maxLength / (num - 1)));
    console.log(trim)
    paragraph.innerHTML = trim;

    document.getElementById('row').appendChild(paragraph);
}