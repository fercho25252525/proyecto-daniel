console.log("Aplicación Calduladora");

function sumar(){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado1 = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado1))
        resultado1 = "La operación no tiene números";
    document.getElementById("resultado1").innerHTML = `Resultado de la suma: ${resultado1}`;
    console.log(`Resultado de la suma: ${resultado1}`);
}

function restar(){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado2 = parseInt(operandoA.value) - parseInt(operandoB.value);
    if(isNaN(resultado2))
        resultado2 = "La operación no tiene números";
    document.getElementById("resultado2").innerHTML = `Resultado de la resta: ${resultado2}`;
    console.log(`Resultado de la resta: ${resultado2}`);
}

function multiplicacion(){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado3 = parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(resultado3))
        resultado3 = "La operación no tiene números";
    document.getElementById("resultado3").innerHTML = `Resultado de la multiplicación: ${resultado3}`;
    console.log(`Resultado de la multiplicacion: ${resultado3}`);
}

function division(){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado4 = parseInt(operandoA.value) / parseInt(operandoB.value);
    if(isNaN(resultado4))
        resultado4 = "La operación no tiene números";
    document.getElementById("resultado4").innerHTML = `Resultado de la división: ${resultado4}`;
    console.log(`Resultado de la división: ${resultado4}`);
}


