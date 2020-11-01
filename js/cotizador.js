var pasePorDia = document.getElementById('pase_dia'); //cantidad de pases por dia
var paseTodosDias = document.getElementById('pase_completo'); //cantidad de pases para todos los dias
var paseDosDias = document.getElementById('pase_dosdias'); //cantidad de pases para 2 dias

var resumen = document.getElementById('lista-productos'); //mostrar el resumen
var total = document.getElementById('suma-total'); //mostrar el precio total

var botonCalcular = document.getElementById('calcular'); //boton calcular

var camisas = document.getElementById('camisa_evento'); //camisas
var etiquetas = document.getElementById('etiquetas'); //etiquetas
var regalo = document.getElementById('regalo'); //regalo


botonCalcular.addEventListener('click', funcionCalcular); 


function funcionCalcular() { //defino funcionCalcular()
    var precioTotal = 0; 
    var b = false; 
    resumen.textContent = ""; 

    
    if (pasePorDia.value != null && pasePorDia.value > 0) {
        resumen.innerHTML += '<p>' + pasePorDia.value + " PASES POR DIA (VIERNES)" + '</p>';
        precioTotal += parseInt(pasePorDia.value) * 30;
        b = true;
    }

    if (paseTodosDias.value != null && paseTodosDias.value > 0) {
        resumen.innerHTML += '<p>' + paseTodosDias.value + " PASES PARA TODOS LOS DIAS" + '</p>';
        precioTotal += parseInt(paseTodosDias.value) * 50;
        b = true;
    }

    if (paseDosDias.value != null && paseDosDias.value > 0) {
        resumen.innerHTML += '<p>' + paseDosDias.value + " PASES PARA DOS DÍAS (VIERNES Y SABADOS)" + '</p>';
        precioTotal += parseInt(paseDosDias.value) * 45;
        b = true;
    }


    if (camisas.value != null && camisas.value > 0) {
        resumen.innerHTML += '<p>' + camisas.value + " CAMISAS (CON DESCUENTO)" + '</p>';
        precioTotal += parseInt(camisas.value) * 0.7;
        b = true;
    }

    if (etiquetas.value != null && etiquetas.value > 0) {
        resumen.innerHTML += '<p>' + etiquetas.value + " PAQUETES DE 10 ETIQUETAS" + '</p>';
        precioTotal += parseInt(etiquetas.value) * 2;
        b = true;
    }

    if (regalo.value > 0) {
        resumen.innerHTML += '<p>' + regalo.options[regalo.selectedIndex].text + " (REGALO)" + '</p>';
        b = true;
    }

    
    if (b) {
        total.textContent = "$" + precioTotal;
    } else {
        total.textContent = "No hay nada para calcular";
    }

}
