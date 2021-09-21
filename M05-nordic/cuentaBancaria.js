//Ejercicio 1. Crear objeto Cuenta Bancaria

function Cuenta (
    nombre,
    apellido,
    numero
) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.numero = numero;
    this.saldo = 0;
    this.movimientos = [];

    //Ejercicio 2. Metodos

    this.getNombreCompleto = () => `${this.nombre} ${this.apellido}`;

    this.debit = function (valor) {

    }

    this.credit = function (valor) {

    }

    this.getSaldo = () => this.saldo;

    this.getMovimientos = () => this.movimientos;
}

// Ejercicio 3. Crear 3 cuentas y realizar operaciones

// Ejercicio 4. Mostrar historial solo de debito y solo de credito 

// Ejercicio 5. Mostrar total debitado y acreditado