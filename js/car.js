const products = [
  {
    name: 'Bicicleta 4x4',
    image: './assets/Bicicleta.jpg', // modificar por la ruta donde guarden sus imagenes
    price: 760000,
    quantity: 2,
  },
  {
    name: 'Casco de Bicicleta',
    image: './assets/casco bicicleta.jpg', // modificar por la ruta donde guarden sus imagenes
    price: 60000,
    quantity: 4,
  },
  {
    name: 'Readmi 9',
    image: './assets/Telefono.jpeg', // modificar por la ruta donde guarden sus imagenes
    price: 660000,
    quantity: 6,
  },
  {
    name: 'Juego de Comedor',
    image: './assets/Juego de comedor moderno.jpg', // modificar por la ruta donde guarden sus imagenes
    price: 2250000,
    quantity: 1,
  },
  {
    name: 'Lentes de Sol',
    image: './assets/Lentes.webp', // modificar por la ruta donde guarden sus imagenes
    price: 120000,
    quantity: 1,
  }
];

document.addEventListener('DOMContentLoaded', function () {
  const cartTableBody = document.getElementById('cartBody');
  const cartTotal = document.getElementById('cartTotal');

  let total = 0;

  // Recorrer el arreglo de productos y agregar filas a la tabla
  products.forEach(product => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img class="imgCar" src="${product.image}" alt="${product.name}" width="50"></td>
      <td>${product.name}</td>
      <td>$${product.price}</td>
      <td>${product.quantity}</td>
      <td>${product.price * product.quantity}</td>
    `;
    cartTableBody.appendChild(row);

    total += product.price * product.quantity;
  });

  // Mostrar el total del carrito
  cartTotal.textContent = `${total}`;
});