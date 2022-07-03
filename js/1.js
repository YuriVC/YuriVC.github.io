const button = document.getElementById('button');
var result = document.getElementById("result");

button.addEventListener('click', somar);

function somar() {
    var a = document.getElementById("input1").value;
    var b = document.getElementById("input2").value;
    a = parseInt(a);
    b = parseInt(b);
    result.innerHTML = a + b;
}