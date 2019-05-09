function myFunction() {
    var x = document.forms["nameAmount"];
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "<br>";
}
    document.getElementById("list").innerHTML = text;
}