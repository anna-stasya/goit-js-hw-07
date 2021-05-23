const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  //const ingredientsEl = document.querySelector('#ingredients'); 
  const ingredientsEl = document.getElementById('ingredients')


 const allIngredients = ingredients.map(ingredient => {

    const ingredientsItemEl = document.createElement('li');
    ingredientsItemEl.textContent = ingredient;
    ingredientsEl.appendChild(ingredientsItemEl);
 });





 