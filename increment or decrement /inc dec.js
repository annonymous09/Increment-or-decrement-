const inc = document.getElementById("inc");
const dec = document.getElementById("dec")
const display = document.getElementById("display");
const resetbtn = document.getElementById("reset");

let count = 0;

function increment() {
  count++;
  display.textContent = count;
}

function decrement() {
  if (count > 0) {
    count--;
    display.textContent = count;
  }
  else {
    count = 0;
  }
}



resetbtn.addEventListener('click',()=>{
  count=0;
  display.textContent=count;
})