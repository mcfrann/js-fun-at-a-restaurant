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
  // for (var i = 0; i < newRes.length; i++) {
    var breakArray = newRes.menus.breakfast;
    var lunchArray = newRes.menus.lunch;
    var dinnerArray = newRes.menus.dinner;
    var fullMenu = breakArray + lunchArray + dinnerArray;
    for (var i = 0; i < fullMenu.length; i++) {
      
    if (itemType === "breakfast") {
      breakArray.splice(i, 1);
      return `No one is eating our ${newMenuItem} - it has been removed from the ${itemType} menu!`;
    } else if (itemType === "lunch" && lunchArray.length == 0) {
      lunchArray.splice(i, 1);
      return `No one is eating our ${newMenuItem} - it has been removed from the ${itemType} menu!`;
    } else if (itemType === "dinner") {
      dinnerArray.splice(i, 1);
      return `No one is eating our ${newMenuItem} - it has been removed from the ${itemType} menu!`;
    } else {
      return `Sorry, we don't sell ${newMenuItem}, try adding a new recipe!`;
    }
  }
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
