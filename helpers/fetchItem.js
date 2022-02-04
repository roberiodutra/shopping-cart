const fetchItem = async (itemID) => {
  if (!itemID) throw new Error('You must provide an url');
  const url = `https://api.mercadolibre.com/items/${itemID}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
