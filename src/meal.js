function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`;
}


function createMenuItem(menuItemName, price, type) {
  var menuItem = {
    name: menuItemName,
    price: price,
    type: type
  }
  return menuItem;
}

function addIngredients(ingredient, array) {
  if (array.includes(ingredient) === false) array.push(ingredient);
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`;
}

function decreasePrice(price) {
  var percent = .1;
  return price - (price * percent);
}

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
