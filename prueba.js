function convertirMoneda(divisa) {
    let importe = prompt('Ingrese cantidad de pesos a convertir');
    let valormoneda = 0;
    if (divisa == 'euros') {
        valormoneda = 315;
    } else {
        valormoneda = 287;
    }

    let cantmoneda = parseInt(importe) / valormoneda;
    cantmoneda = parseInt(cantmoneda);

    alert('Usted puede comprar ' + cantmoneda + ' ' + divisa);
    console.log('Usted puede comprar ' + cantmoneda + ' ' + divisa);
}