function convertirMoneda(divisa) {
    let importe = prompt('Ingrese cantidad de pesos a convertir');
    let valormoneda = 0;

    // Evaluo el tipo de cambio, aquí se debe actualizar el valor de la divisa extranjera.
    if (divisa == 'euros') {
        valormoneda = 315;
    } else {
        valormoneda = 287;
    }

    //Calculo la cantidad de moneda extranjera
    let cantmoneda = parseInt(importe) / valormoneda;
    cantmoneda = parseInt(cantmoneda);
    let resto = parseInt(importe) - cantmoneda * valormoneda;

    // Muestro el resultado y el vuelto
    alert('Usted puede comprar ' + cantmoneda + ' ' + divisa);
    alert('Le sobran ' + resto + ' pesos');
}