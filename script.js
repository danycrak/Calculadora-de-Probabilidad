function calcularProbabilidad() {
    var casoFavorable = parseFloat(document.getElementById('favorable').value);
    var casoPosible = parseFloat(document.getElementById('posible').value);

    if (isNaN(casoFavorable) || isNaN(casoPosible) || casoPosible === 0) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    var probabilidad = casoFavorable / casoPosible;
    probabilidad = probabilidad.toFixed(2); // Redondear a dos decimales

    document.getElementById('probabilidad').innerText = `P(A) = ${probabilidad}`;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////


function calcularProbabilidadCondicionada() {
    // Obtener valores de A y B desde los campos de entrada
    var inputA = parseFloat(document.getElementById('inputA').value);
    var inputB = parseFloat(document.getElementById('inputB').value);
  
    // Verificar si los valores son números válidos
    if (isNaN(inputA) || isNaN(inputB)) {
      alert('Por favor, ingrese valores numéricos válidos para A y B.');
      return;
    }
  
    // Calcular la probabilidad condicional usando la fórmula
    var probabilidadInterseccion = inputA;  // Cambio aquí: inputA en lugar de inputA * inputB
    var probabilidadB = inputB;
  
    var probabilidadCondicionada = probabilidadInterseccion / probabilidadB;
  
    // Mostrar el resultado
    document.getElementById('result').textContent = 'P(A | B) = ' + probabilidadCondicionada.toFixed(2);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function calcularProbabilidadUnion() {
    var probabilidadAUnion = parseFloat(document.getElementById('inputAUnion').value);
    var probabilidadBUnion = parseFloat(document.getElementById('inputBUnion').value);

    if (isNaN(probabilidadAUnion) || isNaN(probabilidadBUnion)) {
        alert('Por favor, ingrese valores numéricos válidos para A y B.');
        return;
    }

    var probabilidadInterseccionUnion = probabilidadAUnion * probabilidadBUnion;
    var probabilidadUnion = probabilidadAUnion + probabilidadBUnion - probabilidadInterseccionUnion;

    document.getElementById('probabilidadUnion').innerText = `P(A ∪ B) = ${probabilidadUnion.toFixed(2)}`;
}

////////////////////////////////////////////////////////////////////////////////////////////////////

function calcularProbabilidadesDependientes() {
    var probabilidadA = parseFloat(document.getElementById('probabilityA').value);
    var probabilidadB = parseFloat(document.getElementById('probabilityB').value);

    if (isNaN(probabilidadA) || isNaN(probabilidadB)) {
        alert('Por favor, ingrese valores numéricos válidos para P(A) y P(B).');
        return;
    }

    // Calcular P(A ∩ B)
    var probabilidadInterseccion = probabilidadA * probabilidadB;

    // Calcular P(B|A)
    var probabilidadCondicionadaB_A = probabilidadInterseccion / probabilidadA;

    // Calcular P(A|B)
    var probabilidadCondicionadaA_B = probabilidadInterseccion / probabilidadB;

    // Mostrar los resultados
    document.getElementById('probabilidadInterseccion').innerText = `P(A ∩ B) = ${probabilidadInterseccion.toFixed(2)}`;
    document.getElementById('probabilidadCondicionadaB|A').innerText = `P(B|A) = ${probabilidadCondicionadaB_A.toFixed(2)}`;
    document.getElementById('probabilidadCondicionadaA|B').innerText = `P(A|B) = ${probabilidadCondicionadaA_B.toFixed(2)}`;
}

//////////////////////////////////////////////////////////////////////////////////////



