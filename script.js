// Seleccionar elementos del DOM
const form = document.getElementById('dataForm');
const inputData = document.getElementById('inputData');
const dataList = document.getElementById('dataList');

// Cargar datos desde localStorage cuando la página cargue
document.addEventListener('DOMContentLoaded', loadData);

// Escuchar el envío del formulario
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = inputData.value.trim();
    if (data) {
        saveData(data);
        displayData(data);
        inputData.value = '';  // Limpiar el campo de texto
    }
});

// Guardar el dato en localStorage
function saveData(data) {
    let storedData = JSON.parse(localStorage.getItem('dataList')) || [];
    storedData.push(data);
    localStorage.setItem('dataList', JSON.stringify(storedData));
}

// Cargar los datos guardados desde localStorage
function loadData() {
    let storedData = JSON.parse(localStorage.getItem('dataList')) || [];
    storedData.forEach(displayData);
}

// Mostrar los datos en la lista
function displayData(data) {
    const li = document.createElement('li');
    li.textContent = data;
    dataList.appendChild(li);
}
// Seleccionar el botón para limpiar datos
const clearButton = document.getElementById('clearData');

// Escuchar el clic del botón de limpiar datos
clearButton.addEventListener('click', function () {
    clearData();
});

// Limpiar datos de localStorage y la lista en la interfaz
function clearData() {
    localStorage.removeItem('dataList'); // Eliminar datos del localStorage
    dataList.innerHTML = ''; // Limpiar la lista visible
}
