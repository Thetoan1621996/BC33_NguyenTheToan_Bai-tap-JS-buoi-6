// Bài tập 1
function find() {
  var n = 1;
  var sum = 1;
  while (sum <= 10000) {
    n++;
    sum += n;
  }
  document.getElementById("result").innerHTML = "Giá trị nhỏ nhất là: " + n;
}
find();

// Bài tập 2
function sumCal() {
  var x = document.getElementById("inputX").value;
  var n = document.getElementById("inputN").value;
  var exponential = 1;
  var sum = 0;
  for (i = 1; i <= n; i++) {
    exponential *= x;
    sum += exponential;
  }
  document.getElementById("sumCal").innerHTML = "Tổng bằng: " + sum;
}

// Bài tập 3
function factorialCal() {
  var n = document.getElementById("numInput").value;
  var factorial = 1;
  var i = 1;
  while (i <= n) {
    factorial *= i;
    i++;
  }
  document.getElementById("show").innerHTML =
    n + " giai thừa bằng: " + factorial;
}

// Bài tập 4
function createDiv() {
  var output = "";
  for (b = 0; b < 10; b++) {
    var div = '<div class="alert alert-success mt-2 text-white newDiv"></div>';
    output += div;
    document.getElementById("divDad").innerHTML = output;
    var divS = document.getElementsByClassName("newDiv");
    for (c = 0; c < divS.length; c++) {
      if ((c + 1) % 2 == 0) {
        divS[c].style.background = "red";
        divS[c].innerHTML = "Div chẵn " + (c + 1);
      } else {
        divS[c].style.background = "blue";
        divS[c].innerHTML = "Div lẻ " + (c + 1);
      }
    }
  }
}
