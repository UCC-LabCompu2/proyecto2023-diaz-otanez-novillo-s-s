
function mostrarluna() {
    var fechaSeleccionada = document.getElementById('fecha').value;
    var fechaLocal = new Date(fechaSeleccionada);
    var diaSeleccionado = new Date(fechaLocal.getUTCFullYear(), fechaLocal.getUTCMonth(), fechaLocal.getUTCDate()).getDate();

    var canvasId = "canvas" + diaSeleccionado;
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");

    // Dibujar la luna en el día correspondiente
    if (diaSeleccionado >= 1 && diaSeleccionado <= 15) {
        // Calcula las coordenadas del centro del canvas
        var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;
        var radius = canvas.width / 4;

        // Dibuja la luna
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 20;
        ctx.fill();
        ctx.closePath();
    }

    if (diaSeleccionado >= 16 && diaSeleccionado <= 31) {
        // Calcula las coordenadas del centro del canvas
        var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;
        var radius = canvas.width / 4;

        // Dibuja la luna
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, Math.PI / 2, Math.PI * 1.5, false);
        ctx.lineTo(centerX, centerY - radius);
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 20;
        ctx.fill();
        ctx.closePath();
    }
}

window.onload = function() {
    // Generar los elementos <canvas> para cada día en la tabla
    var tabla = document.querySelector('.calendario');
    var filas = tabla.getElementsByTagName('tr');

    for (var i = 1; i < filas.length; i++) {
        var celdas = filas[i].getElementsByTagName('td');
        for (var j = 0; j < celdas.length; j++) {
            var dia = celdas[j].innerText;
            var canvasId = "canvas" + dia;
            var canvas = document.createElement('canvas');
            canvas.id = canvasId;
            canvas.className = "lun";
            canvas.width = 150;
            canvas.height = 160;
            celdas[j].appendChild(canvas);
        }
    }
};

function resetear() {
    // Restablecer los valores y estados de los elementos que necesites
    document.getElementById('fecha').value = ''; // Restablecer el valor del campo de fecha
    var canvasList = document.getElementsByClassName('lun'); // Obtener la lista de elementos canvas
    for (var i = 0; i < canvasList.length; i++) {
      var canvas = canvasList[i];
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el contenido de cada canvas
    }
};
  


