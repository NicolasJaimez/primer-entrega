// remeras 100 pantalones 250 zapatillas 350 buzo 500
let producto = parseInt(prompt("Que desea comprar: 1-remera, 2-pantalon, 3-zapatilla, 4-buzo"));
let pregunta = true;
let compraTotal = 0;
let decision;
let final;

function compra() {
    switch (pregunta = true) {
        case producto === 1:
            compraTotal = compraTotal + 100;
            break;
        case producto === 2:
            compraTotal = compraTotal + 250;
            break;
        case producto === 3:
            compraTotal = compraTotal + 350;
            break;
        case producto === 4:
            compraTotal = compraTotal + 500;
            break;
        default:
            alert("inexistente");
            producto = parseInt(prompt("Que desea comprar: 1-remera, 2-pantalon, 3-zapatilla, 4-buzo"));
            break;
    }
    decision = parseInt(prompt('seguir comprando? 1Si - 2No'));
    if (decision === 1) {
        producto = parseInt(prompt("Que desea comprar: 1-remera, 2-pantalon, 3-zapatilla, 4-buzo"));
        compra();
    } else if (decision === 2) {
        pregunta = false;
    } else {
        alert('Por favor ponga 1 o 2');
        decision = parseInt(prompt('seguir comprando? 1Si - 2No'));
    }
}

compra();

final = alert(`el total de su compra es ${compraTotal}`);
