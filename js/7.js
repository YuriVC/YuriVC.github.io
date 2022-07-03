const button = document.getElementById('button');
var result = document.getElementById("result");
button.addEventListener('click', total);
function total() {
    var a = document.getElementById("input1").value;
    var b = document.getElementById("input2").value;
    var x = document.getElementById("input3").value;
    var y = document.getElementById("input4").value;
    a = parseInt(a);
    b = parseInt(b);
    x = parseInt(x);
    y = parseInt(y);
    a = (a * y) + x + (b * 0.05);
    result.innerHTML = a;
}