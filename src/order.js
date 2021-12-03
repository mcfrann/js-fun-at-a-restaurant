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
    if (i != 0) {
      itemNames.push(" " + array[i].item);
    } else {
      itemNames.push(array[i].item)
    }
  }

return itemNames.toString();

}



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}
