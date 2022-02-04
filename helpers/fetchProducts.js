const fetchProducts = async (item) => {
  if (!item) throw new Error('You must provide an url');
  const url = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${item}`);
  try {
    return url.json();
  } catch (error) {
    return error;
  }
  // Poderia fazer assim também.
  // return fetch(url)
  //  .then((response) => response.json())
  //  .catch((error) => error);
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
