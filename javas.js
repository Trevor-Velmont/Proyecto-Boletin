document.getElementById("miFormulario").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var nombre = document.getElementById("nombres").value;
    var apellido = document.getElementById("apellidos").value;
    var identificacion = document.getElementById("identidad").value;
    var periodo = document.getElementById("periodo_lect").value;

    // Guardar los datos en el almacenamiento local
    localStorage.setItem("nombres", nombre);
    localStorage.setItem("apellidos", apellido);
    localStorage.setItem("identidad", identificacion);
    localStorage.setItem("periodo_lect", periodo);

    // Redireccionar a otra página
    window.location.href = "otra_pagina.html";
});