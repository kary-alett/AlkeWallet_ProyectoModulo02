

/*Guardar los movimientos */
function guardarMovimiento(tipo, monto) {
    let movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];

    movimientos.push({
        tipo: tipo,
        monto: monto,
        fecha: new Date().toLocaleString()
    });

    localStorage.setItem("movimientos", JSON.stringify(movimientos));
}



/*Función para depositar*/
function depositar() {
    let monto = Number(document.getElementById("recargar").value);
    let saldo = Number(localStorage.getItem("saldo")) || 0;

    if (monto <= 0) {
       mostrarModal("Ingrese un monto válido");
        return;
    }
/*Actualizar el saldo*/
    saldo = saldo + monto;
    localStorage.setItem("saldo", saldo);

    /*Guardar el movimiento*/
    guardarMovimiento("Depósito", monto);
 /*Mostrar mensaje*/
     mostrarModal("Recarga exitosa. Nuevo saldo: $" + saldo.toLocaleString());
 /* Volver a 0 el campo recargar*/
     document.getElementById("recargar").value = "";
}


/*Función para enviar dinero*/
function enviar() {
    let monto = Number(document.getElementById("envioDinero").value);
    let saldo = Number(localStorage.getItem("saldo")) || 0;

    if (monto > saldo) {
        mostrarModal("Saldo insuficiente");
        return;
    }
 /* Actualizar el saldo*/
    saldo = saldo - monto;
    localStorage.setItem("saldo", saldo);

    /*Guardar el movimiento*/
    guardarMovimiento("Envío", -monto);

     /* Mostrar mensaje*/
    mostrarModal("Dinero enviado. Nuevo saldo: $" + saldo.toLocaleString());

    /*Volver a 0 el campo enviar*/
    document.getElementById("envioDinero").value = "";
}

/*Función para mostrar el modal*/
function mostrarModal(mensaje) {
    const mensajeSaldo = document.getElementById("mensajeSaldo");
    mensajeSaldo.textContent = mensaje;

    const modalElement = document.getElementById("saldoModal");
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
}


/*  Cargar el DOM */
document.addEventListener("DOMContentLoaded", () => {

    /*Mostrar el Saldo*/
    const elementoSaldo = document.getElementById("saldoActual");
    if (elementoSaldo) {
        let saldo = Number(localStorage.getItem("saldo")) || 0;
        elementoSaldo.textContent = "$" + saldo.toLocaleString();
    }

    /*Guardar las transacciones*/
    const tabla = document.getElementById("tablaMovimientos");
    if (!tabla) return;

    const movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];
    tabla.innerHTML = "";

    /*Mostrar los movimientos en la tabla*/
    movimientos.forEach((m, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <th>${index + 1}</th>
            <td>${m.tipo}</td>
            <td class="text-success">${m.monto > 0 ? m.monto.toLocaleString() : "-"}</td>
            <td class="text-danger">${m.monto < 0 ? Math.abs(m.monto).toLocaleString() : "-"}</td>
        `;
        tabla.appendChild(fila);
    });

  /*mostrar y ocultar el saldo*/
});
$(document).ready(function(){


    $("#saldoActual"). click(function() {
        let saldo = Number(localStorage.getItem("saldo")) || 0;


        if($("p.texto").is(":visible")) {
            $("p.texto").hide();
            } else {
                $("p.texto").text("$" + saldo.toLocaleString());
                $("p.texto").show();
        };
    });




    
});

