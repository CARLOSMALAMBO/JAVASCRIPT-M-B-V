document.getElementById("display").value = 0;

function mostrar_numeros(numero) {
    document.getElementById("display").value = numero;
}

var cantidad = "";
var sumatoria = 0;
var sumar = false;
var restar = false;
var multiplicacion = false;
var division = false;
var porcentaje = false;
var parenA = false;
var parenB = false;
var borrador = false;

function mostrar_numeros(numero) {
    document.getElementById("display").value = cantidad + numero;
    cantidad = document.getElementById("display").value;
}

function suma() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    sumar = true;
}

function resta() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    restar = true;
}

function multiplicar() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    multiplicacion = true;
}

function dividir() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    division = true;
}

function porcentajes() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    porcentaje = true;
}

function parentesisA() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    parenA = true;
}

function parentesisB() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    parenB = true;
}

function borrar() {
    sumatoria = parseInt(cantidad)
    location.reload("display").value = sumatoria;
    cantidad = "";
    borrador = true;
}

function igual() {
    if (sumar) {
        document.getElementById("display").value = sumatoria + parseInt(cantidad);
    }
    if (restar) {
        document.getElementById("display").value = sumatoria - parseInt(cantidad);
    }
    if (multiplicacion) {
        document.getElementById("display").value = sumatoria * parseInt(cantidad);
    }
    if (division) {
        document.getElementById("display").value = sumatoria / parseInt(cantidad);
    }
    if (porcentaje) {
        document.getElementById("display").value = sumatoria * parseInt(cantidad) / 100;
    }
    if (parenA) {
        document.getElementById("display").value = sumatoria * parseInt(cantidad);
    }
    if (parenB) {
        document.getElementById("display").value = sumatoria * parseInt(cantidad);
    }

}