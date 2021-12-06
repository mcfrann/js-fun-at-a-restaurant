function createRestaurant(resName) {
  var newRes = {
    name: resName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
      }
    }

  return newRes;
}

function addMenuItem(newRes, newMenuItem) {
  var breakIncludes = newRes.menus.breakfast.includes(newMenuItem);
  if (breakIncludes === false && newMenuItem.type === "breakfast") {
    newRes.menus.breakfast.push(newMenuItem);
  } else if (newRes.menus.lunch.includes(newMenuItem) === false && newMenuItem.type === "lunch") {
    newRes.menus.lunch.push(newMenuItem);
  } else if (newRes.menus.dinner.includes(newMenuItem) === false && newMenuItem.type === "dinner") {
    newRes.menus.dinner.push(newMenuItem);
  }
}



  function removeMenuItem(newRes, newMenuItem, itemType) {
    var menus = Object.keys(newRes.menus)
    for (var i = 0; i < menus.length; i++) {

    if (itemType === "breakfast" && newRes.menus.breakfast.includes(newMenuItem)) {
      breakArray.splice(i, 1);
      return `No one is eating our ${newMenuItem} - it has been removed from the ${itemType} menu!`;
    } else if (itemType === "lunch" && newRes.menus.lunch.includes(newMenuItem)) {
      lunchArray.splice(i, 1);
      return `No one is eating our ${newMenuItem} - it has been removed from the ${itemType} menu!`;
    } else if (itemType === "dinner" && newRes.menus.dinner.includes(newMenuItem)) {
      dinnerArray.splice(i, 1);
      return `No one is eating our ${newMenuItem} - it has been removed from the ${itemType} menu!`;
    } else {
      return `Sorry, we don't sell ${newMenuItem}, try adding a new recipe!`;
    }
  }
}

//I can't understand why this doesn't work!! :()


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
