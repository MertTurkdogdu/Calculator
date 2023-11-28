// Function to display value
function display(val) {
  document.getElementById("result").value += val;
}

function myFunction(event) {
  if (
    event.key == "0" ||
    event.key == "1" ||
    event.key == "2" ||
    event.key == "3" ||
    event.key == "4" ||
    event.key == "5" ||
    event.key == "6" ||
    event.key == "7" ||
    event.key == "8" ||
    event.key == "9" ||
    event.key == "+" ||
    event.key == "-" ||
    event.key == "*" ||
    event.key == "/"
  )
    document.getElementById("result").value += event.key;
}

// Function to use Enter key
const cal = document.querySelector(".calculator");
cal.onkeyup = function (event) {
  if (event.keyCode === 13) {
    let x = document.getElementById("result").value;
    solve();
  }
};

// Function to solve
function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}

// Function to clear result
function clr() {
  document.getElementById("result").value = "";
  console.log("Cleared");
}
