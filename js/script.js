document.addEventListener('DOMContentLoaded', function () {
  const createProductButton = document.getElementById('createProduct');

  createProductButton.addEventListener('click', function () {
    const nombreInput = document.getElementById('nombre');
    const priceInput = document.getElementById('price');
    const inventoryInput = document.getElementById('inventory');

    // Eliminar mensajes de advertencia anteriores
    clearWarnings();

    // Verificar si los campos están vacíos y mostrar advertencias
    if (!nombreInput.value.trim()) {
      showWarning(nombreInput, 'El nombre es requerido.');
    }

    if (!priceInput.value.trim()) {
      showWarning(priceInput, 'El precio es requerido.');
    }

    if (!inventoryInput.value.trim()) {
      showWarning(inventoryInput, 'El inventario es requerido.');
    }

    // Verificar si se mostraron advertencias y salir si es necesario
    const warningElements = document.querySelectorAll('.warning');
    if (warningElements.length > 0) {
      return;
    }

    // Si todos los campos están llenos, muestra el mensaje de alerta
    const productName = nombreInput.value;
    alert('El producto ' + productName + ' ha sido creado.');
  });

  // Función para mostrar mensajes de advertencia debajo de los campos
  function showWarning(inputElement, message) {
    const warningElement = document.createElement('p');
    warningElement.className = 'warning';
    warningElement.textContent = message;

    // Insertar el mensaje debajo del campo de entrada
    inputElement.parentNode.appendChild(warningElement);
  }

  // Función para eliminar mensajes de advertencia anteriores
  function clearWarnings() {
    const warningElements = document.querySelectorAll('.warning');
    warningElements.forEach(function (element) {
      element.remove();
    });
  }
});