const fetchItem = async (itemID) => {
  try {
    const url = `https://api.mercadolibre.com/items/${itemID}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    // como o retorno do erro é um array, aqui transformo em string, para que no teste, tenha certeza que não é um falso positivo com base no retorno.
    throw new Error('You must provide an url').toString();
  }
//   Ou assim \/
//   if (!itemID) {
//     throw new Error('You must provide an url').toString();
//   }
//   const url = `https://api.mercadolibre.com/items/${itemID}`;
//   return fetch(url)
//     .then((response) => response.json());
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
