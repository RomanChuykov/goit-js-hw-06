const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const li=ingredients.map(elem=>{
  const ingredient=document.createElement("li");
  ingredient.textContent=elem;
  ingredient.classList.add('item');
  return ingredient;
});

const ingredientsUl=document.querySelector('#ingredients')
ingredientsUl.append(...li)

