function takeOrder(order, array) {
  if (array.length < 3) array.push(order);
}

function refundOrder(number, array) {
  for (var i = 0; i < array.length; i++) {
    if (number === array[i].orderNumber) {
      array.splice(i, 1);
    }
  }
}

function listItems(array) {
  var itemNames = [];
  for (var i = 0; i < array.length; i++) {
    itemNames.push(array[i].item);
    var itemString = itemNames.join(', ');
  }

return itemString;
}

function searchOrder(array, itemName) {
  var arrayItem = [];
  for (var i = 0; i < array.length; i++) {
  arrayItem.push(array[i].item);
  }
  if (arrayItem.includes(itemName)) {
    return true;
  } else {
    return false;
  }
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
