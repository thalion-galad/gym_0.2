function calcularProte() {
    const sexo = document.getElementById("sexo").value;
    const actividad = document.getElementById("actividad").value;
    const objetivo = document.getElementById("objetivo").value;
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let edad = parseInt(document.getElementById("edad").value);
    let tmb;
    let tdee;

    if (!sexo || !actividad || !objetivo || isNaN(peso) || isNaN(altura) || isNaN(edad)) {
        document.getElementById("alerta").innerHTML = `
            <div class="alert alert-warning" role="alert">
                Por favor, completa todos los campos antes de continuar.
            </div>
        `;
        return;
    }


    if (sexo == "M") {
        tmb = (10 * peso) + (6.25 * altura) - (5 * edad) + 5;

    } else if (sexo == "F") {
        tmb = (10 * peso) + (6.25 * altura) - (5 * edad) - 161;
    }
    if (actividad == "sede") {
        tdee = tmb * 1.2;
    } else if (actividad == "lacti") {
        tdee = tmb * 1.375;
    } else if (actividad == "acti") {
        tdee = tmb * 1.55;
    } else if (actividad == "muyac") {
        tdee = tmb * 1.725;
    }
    if (objetivo == "mp") {
        document.getElementById("maxCal").value = tdee;
        document.getElementById("minCal").value = tdee;
    } else if (objetivo == "pg") {
        document.getElementById("maxCal").value = tdee - 500;
        document.getElementById("minCal").value = tdee - 250;
    } else if (objetivo == "am") {
        document.getElementById("maxCal").value = tdee + 500;
        document.getElementById("minCal").value = tdee + 250;
    }
    document.getElementById("maxProt").value = peso * 2.2;
    document.getElementById("minProt").value = peso * 1.6;

}
