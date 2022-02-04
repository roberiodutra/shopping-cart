function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function cartItemClickListener(_event) {
  // coloque seu código aqui
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const addToCart = async (cartItem) => {
  const cartItems = document.querySelector('.cart__items');
  const data = await fetchItem(cartItem);
  const obj = { sku: data.id, name: data.title, salePrice: data.price };
  cartItems.appendChild(createCartItemElement(obj));
};

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
    .addEventListener('click', () => addToCart(sku));

  return section;
}

const addItems = async () => {
  const items = document.querySelector('.items');
  const data = await fetchProducts('computador');
  data.results.forEach((elem) => {
    const obj = { sku: elem.id, name: elem.title, image: elem.thumbnail };
    items.appendChild(createProductItemElement(obj));
  });
};

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

addItems();

window.onload = () => { };
