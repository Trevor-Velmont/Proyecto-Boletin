document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;

    // Guardar los datos en el almacenamiento local
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("email", email);

    // Redireccionar a otra página
    window.location.href = "otra_pagina.html";
});