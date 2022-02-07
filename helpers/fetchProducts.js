const fetchProducts = async (item) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    //como o retorno do erro é um array, aqui transformo em string, para que no teste, tenha certeza que não é um falso positivo com base no retorno.
    throw new Error('You must provide an url').toString();
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
