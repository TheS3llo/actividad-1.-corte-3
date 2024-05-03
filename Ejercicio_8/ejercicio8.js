const calcularImpuestos = (monto, porcentaje) => {
    return (monto * porcentaje) / 100;
};

(function() {
    const monto = 1000; 
    const porcentaje = 10; 
    
    const impuestos = calcularImpuestos(monto, porcentaje);
    console.log("El monto de impuestos a pagar es:", impuestos);
})();
