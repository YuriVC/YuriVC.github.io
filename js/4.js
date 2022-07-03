const button = document.getElementById('button');
var result = document.getElementById("result");
button.addEventListener('click', hipotenusa);
function hipotenusa() {
    var a = document.getElementById("input1").value;
    var b = document.getElementById("input2").value;
    a = parseInt(a);
    b = parseInt(b);
    a = (a * a + b * b);
    result.innerHTML = Math.sqrt(a);
}