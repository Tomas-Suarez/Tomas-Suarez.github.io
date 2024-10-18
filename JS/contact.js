document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío por defecto

    let isValid = true;
    clearErrors();

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const pedido = document.getElementById("texpedido");

    // Validaciones
    if (nombre.value.trim() === "" || nombre.value.trim().length > 50) {
        showError(nombre, "El nombre es obligatorio y debe tener menos de 50 caracteres.");
        isValid = false;
    }

    if (email.value.trim() !== "" && !validateEmail(email.value.trim())) {
        showError(email, "Ingrese un correo electrónico válido.");
        isValid = false;
    }

    const telefonoPattern = /^\d{10}$/;
    if (!telefonoPattern.test(telefono.value.trim())) {
        showError(telefono, "Ingrese un teléfono válido, con exactamente 10 dígitos.");
        isValid = false;
    }

    if (pedido.value.trim() === "") {
        showError(pedido, "El pedido es obligatorio.");
        isValid = false;
    }
    

    if (isValid) {
        mostrarResultado(nombre.value, email.value, telefono.value, pedido.value);
        limpiarFormulario();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s]+\.[^\s]+$/;
    return re.test(email);
}

function clearErrors() {
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach(input => {
        input.classList.remove("error"); // Elimina la clase de error
        const errorSpan = input.nextElementSibling;
        if (errorSpan) {
            errorSpan.textContent = "";
            errorSpan.style.display = "none"; // Oculta el tooltip
        }
    });
}


function showError(input, message) {
    input.classList.add("error");
    const errorSpan = input.nextElementSibling;
    if (errorSpan) {
        errorSpan.textContent = message;
        errorSpan.style.display = "block"; // Asegúrate de que se muestre
    }
}


function mostrarResultado(nombre, email, telefono, pedido) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>Nombre: ${nombre}</p>
        <p>Correo Electrónico: ${email}</p>
        <p>Teléfono: ${telefono}</p>
        <p style="color: green;">El formulario ha sido enviado correctamente.</p>
    `;
}

function limpiarFormulario() {
    document.getElementById("contactForm").reset();
    clearErrors();
    document.getElementById("nombre").focus();
}
