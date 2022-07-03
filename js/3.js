const button = document.getElementById('button');
var result = document.getElementById("result");
button.addEventListener('click', primo);
function primo() {
    var a = document.getElementById("input1").value;
    a = parseInt(a);
    result.innerHTML = "Nao e primo";
    if (a == 2) {
        result.innerHTML = "E primo";
    }
    for (var b = 2; a > b && a % 2 != 0; b++) {
        console.log("teste");
        if (a % b != 0) {
            result.innerHTML = "E primo";
        }
        else if (a % b == 0) {
            result.innerHTML = "Nao e primo";
            break;
        }
    }
}