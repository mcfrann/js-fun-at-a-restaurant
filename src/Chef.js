class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;

  }

  greetCustomer(cusName) {
    return `Hello, ${cusName}!`
  }

}




module.exports = Chef
