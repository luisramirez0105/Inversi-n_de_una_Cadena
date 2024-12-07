// Función para invertir una cadena
function invertirCadena(cadena) {
    // Manejar cadenas vacías
    if (!cadena) return "";

    // Utilizar el método split para dividir la cadena en caracteres,
    // reverse para invertir el orden de los caracteres,
    // y join para unir los caracteres en una cadena invertida.
    return cadena.split('').reverse().join('');
}

// Manejo del evento de envío del formulario
document.getElementById('reverseForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const cadena = document.getElementById('stringInput').value; // Obtener la cadena ingresada
    const cadenaInvertida = invertirCadena(cadena); // Invertir la cadena

    // Mostrar el resultado en el div con id "result"
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `La cadena invertida es: ${cadenaInvertida}`;
});
