const fetchProducts = (item) => {
  if (!item) {
    throw new Error('You must provide an url').toString();
  }
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  return fetch(url)
    .then((response) => response.json())
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
