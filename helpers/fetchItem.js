const fetchItem = (itemID) => {
  if (!itemID) {
    throw new Error('You must provide an url').toString();
  }
  const url = `https://api.mercadolibre.com/items/${itemID}`;
  return fetch(url)
    .then((response) => response.json());
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
