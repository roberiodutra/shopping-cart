const saveCartItems = (elem) => localStorage.setItem('cartItems', JSON.stringify(elem));

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
