

let counterValue=0;
const counter=document.querySelector('#value')
const buttons=document.querySelectorAll('button');
console.log(buttons);
buttons[0].addEventListener("click", () => {
    counterValue-=1;
    counter.textContent=counterValue;
  });
  buttons[1].addEventListener("click", () => {
    counterValue+=1;
    counter.textContent=counterValue;
  });



