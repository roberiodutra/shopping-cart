const fetchProducts = async (item) => {
  if (!item) throw new Error('You must provide an url');
  const url = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${item}`);
  try {
    return await url.json();
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
