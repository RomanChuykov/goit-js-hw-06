const categories=document.querySelector('#categories');
//console.log(categories);
const numberOfCategories= categories.querySelectorAll("ul");



console.log("Number of categories:", numberOfCategories.length);
const  items= categories.querySelectorAll(".item");
console.log('');

items.forEach(function(item){
    console.log('Category: ',item.querySelector('h2').textContent);
    console.log('Elements',item.querySelector('ul').querySelectorAll('li').length);
    console.log('');
});



