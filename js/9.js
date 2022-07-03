const button = document.getElementById('button');
var result = document.getElementById("result");
button.addEventListener('click', media);
function media() {
    var a = document.getElementById("input1").value;
    var b = document.getElementById("input2").value;
    var x = document.getElementById("input3").value;
    a = parseInt(a);
    b = parseInt(b);
    x = parseInt(x);
    a = ((a * 2) + (b * 3) + (x * 5)) / 10;
    result.innerHTML = a;
}