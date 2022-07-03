const button = document.getElementById('button');
var result = document.getElementById("result");
button.addEventListener('click', total);
function total() {
    var a = document.getElementById("input1").value;
    a = parseInt(a);
    a = a + (a * 0.28) + (a * 0.45);
    result.innerHTML = a;
}