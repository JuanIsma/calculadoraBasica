let operando1 = '';
let operando2 = '';
let operador = '';


function agregarNumero(numero) {
    if (!operador) {
        operando1 += numero;
    } else {
        operando2 += numero;
    }
    actualizarDisplay();
}


function agregarOperador(op) {

    if (operando1 !== '') {
    operador = op;
 
    actualizarDisplay(); 
}}


function borrar() {
    operando1 = '';
    operando2 = '';
    operador = '';
    actualizarDisplay();
}


function calcular() {

    if (operando1 !== '' && operando2 !== '' && operador !== '') {
    let resultado;
     
    switch (operador) {
        case '+':
            resultado = parseFloat(operando1) + parseFloat(operando2);
            break;
        case '-':
            resultado = parseFloat(operando1) - parseFloat(operando2);
            break;
        case '*':
            resultado = parseFloat(operando1) * parseFloat(operando2);
            break;
        case '/':
            resultado = parseFloat(operando1) / parseFloat(operando2);
            break;
        default:
            resultado = ' ';
    }
    operando1 = resultado.toString();
    operando2 = '';
    operador = '';
    actualizarDisplay(resultado);
 
    }
}

function actualizarDisplay(valor = '') {
    document.getElementById('display').value = valor || (operando1 + operador + operando2);
     
}