const items = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');
const totalprice = document.querySelector('.total-price');
const emptyButton = document.querySelector('.empty-cart');
const loading = document.querySelector('.loading');
let sum = 0;

const sumPrices = () => {
  const cartItem = document.querySelectorAll('.cart__item');
  cartItem.forEach((item) => {
    const allPrices = item.innerHTML.substring(item.innerHTML.indexOf('$') + 1);
    sum += parseFloat(allPrices);
    totalprice.innerText = sum;
  });
};

emptyButton.addEventListener('click', () => {
  cartItems.innerHTML = '';
  totalprice.innerText = 0;
  saveCartItems(cartItems.innerHTML);
});

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

function cartItemClickListener(e) {
  e.target.remove();
  sum = 0;
  sumPrices();
  if (!cartItems.innerHTML) {
    totalprice.innerText = 0;
  }
}

// Mesma função que criei para o projeto todo-list
function onLoad() {
  const loadItems = getSavedCartItems();
  const parseItems = JSON.parse(loadItems);

  if (parseItems) {
    cartItems.innerHTML = parseItems;
    cartItems.addEventListener('click', cartItemClickListener);
  }
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const addToCart = async (cartItem) => {
  const data = await fetchItem(cartItem);
  const obj = { sku: data.id, name: data.title, salePrice: data.price };
  cartItems.appendChild(createCartItemElement(obj));
  sum = 0;
  sumPrices();
  saveCartItems(cartItems.innerHTML);
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
  const data = await fetchProducts('computador');
  loading.remove();
  data.results.forEach((elem) => {
    const obj = { sku: elem.id, name: elem.title, image: elem.thumbnail };
    items.appendChild(createProductItemElement(obj));
  });
};

window.onload = () => {
  onLoad();
  addItems();
  sumPrices();
};
