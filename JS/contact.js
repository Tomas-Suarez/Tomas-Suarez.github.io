document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío por defecto del formulario

    // Limpiar mensajes de error
    document.getElementById('nombreError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('telefonoError').textContent = '';
    document.getElementById('pedidoError').textContent = '';

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const pedido = document.getElementById('pedido').value.trim();

    let isValid = true;

    // Validar campo nombre (obligatorio y longitud máxima)
    if (nombre === '' || nombre.length > 50) {
        document.getElementById('nombreError').textContent = 'El nombre es obligatorio y no debe exceder 50 caracteres.';
        isValid = false;
    }

    // Validar campo email con expresión regular
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Ingrese un correo electrónico válido.';
        isValid = false;
    }

    // Validar campo teléfono con expresión regular
    const telefonoPattern = /^\d{10}$/; // Acepta 10 dígitos
    if (!telefonoPattern.test(telefono)) {
        document.getElementById('telefonoError').textContent = 'El teléfono debe tener 10 dígitos numéricos.';
        isValid = false;
    }

    // Validar campo pedido (obligatorio y longitud máxima)
    if (pedido === '' || pedido.length > 300) {
        document.getElementById('pedidoError').textContent = 'El pedido es obligatorio y no debe exceder 300 caracteres.';
        isValid = false;
    }

    if (isValid) {
        // Si todo es válido, mostrar los datos usando createElement
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = ''; // Limpiar el contenido previo

        const nombreP = document.createElement('p');
        nombreP.textContent = `Nombre: ${nombre}`;
        resultadoDiv.appendChild(nombreP);

        const emailP = document.createElement('p');
        emailP.textContent = `Correo Electrónico: ${email}`;
        resultadoDiv.appendChild(emailP);

        const telefonoP = document.createElement('p');
        telefonoP.textContent = `Teléfono: ${telefono}`;
        resultadoDiv.appendChild(telefonoP);

        const pedidoP = document.createElement('p');
        pedidoP.textContent = `Pedido: ${pedido}`;
        resultadoDiv.appendChild(pedidoP);
        
        // Llamar a la función para limpiar el formulario
        limpiarFormulario();

        const mensajeConfirmacion = document.createElement('p');
        mensajeConfirmacion.textContent = 'El formulario ha sido enviado correctamente.';
        mensajeConfirmacion.style.color = 'green'; // Estilo del mensaje
        resultadoDiv.appendChild(mensajeConfirmacion);

}
});

// Función para limpiar los campos del formulario
function limpiarFormulario() {
document.getElementById('nombre').value = '';
document.getElementById('email').value = '';
document.getElementById('telefono').value = '';
document.getElementById('pedido').value = '';
}