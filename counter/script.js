const counterValue = document.querySelector("#number");
const incrBtn = document.querySelector(".add");
const decrBtn = document.querySelector(".subtract");
const resetBtn = document.querySelector(".reset");
const input = document.querySelector("input");

let defaultInc = 1;
let currValue = 0;

function updatedVal(){
  counterValue.innerText = currValue;
}

function add(){
  currValue += defaultInc;
  updatedVal();
}
function sub(){
  currValue -= defaultInc;
  if (currValue <=0){
    reset();
  }
  updatedVal();
}

function reset(){
  currValue = 0;
  updatedVal();
}
function handleInput(){
  defaultInc = Number(input.value);
}
input.addEventListener("change", handleInput);
incrBtn.addEventListener("click", add);
decrBtn.addEventListener('click', sub);
resetBtn.addEventListener('click', reset);

