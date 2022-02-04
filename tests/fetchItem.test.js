require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('1 - Teste se fecthItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('2 - Fetch foi chamada?', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('3 - Fetch utiliza o endpoint?', async () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('4 - É uma estrutura de dados?', async () => {
    const expected = await fetchItem('MLB1615760527');
    expect(expected).toEqual(item);
  });
  
  it('5 - Retorna erro "You must provide an url"?', async () => {
    try {
      await fetchItem();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
});
