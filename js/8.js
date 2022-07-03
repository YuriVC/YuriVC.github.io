const button = document.getElementById('button');
var result = document.getElementById("result");
button.addEventListener('click', hipotenusa);
function hipotenusa() {
    var a = document.getElementById("input1").value;
    a = parseInt(a);
    a = ((a - 32) * 5) / 9;
    result.innerHTML = a;
}