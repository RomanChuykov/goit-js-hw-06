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

create.addEventListener("click",()=>{
for(let i=0;i<input.value;i+=1){
  divs.push(document.createElement('div'))
}
boxes.append(...divs);
console.log(boxes)
});

destroy.addEventListener("click",()=>{
  for(let i=0;i<input.value;i+=1){
    
    boxes.lastChild.remove();
  }
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