document.getElementById("miFormulario").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var nombre = document.getElementById("nombres").value;
    var identificacion = document.getElementById("identidad").value;
    var periodo = document.getElementById("periodo_lect").value;

    document.getElementById("not_alum").innerHTML = "BOLETÍN DE NOTAS";
    
});
