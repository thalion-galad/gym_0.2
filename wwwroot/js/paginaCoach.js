document.getElementById("formCoach").addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const especialidad = document.getElementById("especialidad").value;
    const experiencia = document.getElementById("experiencia").value;
    const descripcion = document.getElementById("descripcion").value;

    console.log("Nuevo coach:", { nombre, email, especialidad, experiencia, descripcion });
    alert("¡Gracias por registrarte como coach! Revisaremos tu solicitud.");

    this.reset();
});