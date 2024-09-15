document.getElementById('response-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se recargue
    
    const input = document.getElementById('response-input').value;
    const output = document.getElementById('response-output');

    if (input.toLowerCase() === 'riddler') {
        output.textContent = 'Correcto. Bienvenido, detective.';
    } else {
        output.textContent = 'Respuesta incorrecta. Inténtalo de nuevo.';
    }

    // Limpiar el input
    document.getElementById('response-input').value = '';
});
