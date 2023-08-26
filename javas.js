// ejecucion luego de presionar el submit
document.getElementById("miFormulario").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var nombre = document.getElementById("nombres").value;
    var identificacion = document.getElementById("identidad").value;

    var grado = document.getElementById('grado').value;
    var periodo = document.getElementById("periodo_lect").value;

    // Obtener la fecha actual
    const fechaActual = new Date();

    // Obtener los componentes de la fecha (año, mes y día)
    const año = fechaActual.getFullYear();   // Año (cuatro dígitos)
    const mes = fechaActual.getMonth() + 1;     // Mes (0-11, por lo que uso +1 para obtener el mes correcto)
    const dia = fechaActual.getDate();          // Día del mes (1-31)

    // Ordenar la fecha en formato numérico completo
    const fechaNumerica = `${año}/${mes.toString().padStart(2, '0')}/${dia.toString().padStart(2, '0')}`;

    document.getElementById('inombre').innerHTML = "NOMBRE:   " + nombre;
    document.getElementById('iidentificacion').innerHTML = "Tarjeta de identidad: " + identificacion;
    document.getElementById('icurso').innerHTML = "CURSO:  " + grado;
    document.getElementById('idirector').innerHTML = "DIRECTORA DE GRUPO: Maria Teresa";
    document.getElementById('ilectivo').innerHTML = "PERIODO LECTIVO: " + periodo;
    document.getElementById('ifecha').innerHTML = "FECHA:  " + fechaNumerica;

    //asignaturas
    document.getElementById('asig1').innerHTML = "BIOLOGIA";
    document.getElementById('asig2').innerHTML = "INFORMATICA";
    document.getElementById('asig3').innerHTML = "FISICA";
    document.getElementById('asig4').innerHTML = "FILOSOFIA";
    document.getElementById('asig5').innerHTML = "RELOGION";
    document.getElementById('asig6').innerHTML = "ED.FISICA";
    document.getElementById('asig7').innerHTML = "MATEMATICAS";
    document.getElementById('asig8').innerHTML = "GEOMATRIA";
    document.getElementById('asig9').innerHTML = "ECONOMIA Y POLITICA";
    document.getElementById('asig10').innerHTML = "ARTE";
    document.getElementById('asig11').innerHTML = "ETICA Y VALORES";
    document.getElementById('asig12').innerHTML = "INGLES";

    //generar numeros decimales
    //con el toxifed2 defino que sea un numero decimal de 2 digitos eje: (1,2)(2,5) etc.
    function generarNumeroDecimal() {
        return (Math.random() * 10).toFixed(2);
    }

    // Genero un numero por cada asignatura= 12
    const numerosAleatorios = [];
    for (let i = 0; i < 12; i++) {
        numerosAleatorios.push(generarNumeroDecimal());
    }

    // mostrar los numeros
    const numero1 = numerosAleatorios[0];
    const numero2 = numerosAleatorios[1];
    const numero3 = numerosAleatorios[2];
    const numero4 = numerosAleatorios[3];
    const numero5 = numerosAleatorios[4];
    const numero6 = numerosAleatorios[5];
    const numero7 = numerosAleatorios[6];
    const numero8 = numerosAleatorios[7];
    const numero9 = numerosAleatorios[8];
    const numero10 = numerosAleatorios[9];
    const numero11 = numerosAleatorios[10];
    const numero12 = numerosAleatorios[11];

    document.getElementById('not1').innerHTML = numero1;
    document.getElementById('not2').innerHTML = numero2;
    document.getElementById('not3').innerHTML = numero3;
    document.getElementById('not4').innerHTML = numero4;
    document.getElementById('not5').innerHTML = numero5;
    document.getElementById('not6').innerHTML = numero6;
    document.getElementById('not7').innerHTML = numero7;
    document.getElementById('not8').innerHTML = numero8;
    document.getElementById('not9').innerHTML = numero9;
    document.getElementById('not10').innerHTML = numero10;
    document.getElementById('not11').innerHTML = numero11;
    document.getElementById('not12').innerHTML = numero12;

    //observaciones
    document.getElementById('Loremc').innerHTML=` Lorem ipsum dolor sit amet consectetur adipisicing 
    elit. Iusto omnis nam quamitaque necessitatibus doloribus dolores, cumque maiores et 
    perspiciatis ipsam eaque amet suscipit. Aperiamea quam sunt eum velit doloremque 
    adipisci, id consequatur fugit laudantium quia et, iste saepe`;

});
