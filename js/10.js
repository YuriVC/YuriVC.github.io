const button = document.getElementById('button');
var result = document.getElementById("result");
button.addEventListener('click', total);
function total() {
    var a = document.getElementById("input1").value;
    a = parseInt(a);
    if (a < 12) {
        a = (a * 1.3)
    }
    result.innerHTML = a;
}