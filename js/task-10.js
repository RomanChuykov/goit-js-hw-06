function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const create=document.querySelector('button[data-create]')

const destroy = document.querySelector('button[data-destroy]');

const input=document.querySelector("input")
console.log(input);

const boxes=document.querySelector('#boxes')
const divs=[];
let div;
let color;
let rozm=30;

create.addEventListener("click",()=>{
for(let i=0;i<input.value;i+=1){
  
  div=document.createElement('div');
  color=getRandomHexColor();
  
  div.style.backgroundColor=color; 
  div.style.height=rozm.toString()+'px';
  div.style.width=rozm.toString()+'px';
  rozm+=10;
  console.log(div);
  divs.push(div)
}
boxes.append(...divs);
rozm=30;
});

destroy.addEventListener("click",()=>{
  boxes.innerHTML='';
  divs.splice(0,divs.length);
  
  console.log(divs);
});


/*
const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');

console.log(saveBtn.dataset.action); //save
console.log(closeBtn.dataset.action); //close

const dishes = document.querySelectorAll(".dishes > li");
dishes.forEach((dish) => {
  console.log(dish.dataset.id);
});*/