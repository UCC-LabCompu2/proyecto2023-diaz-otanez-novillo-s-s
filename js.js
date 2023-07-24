function mostrarluna() {
    const fechaSeleccionada = document.getElementById('fecha').value;
    const fechaLocal = new Date(fechaSeleccionada);
    const diaSeleccionado = new Date(fechaLocal.getUTCFullYear(), fechaLocal.getUTCMonth(), fechaLocal.getUTCDate()).getDate();

    const canvasId = "canvas" + diaSeleccionado;
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");

    // Dibuja la luna el día correspondiente
    if (diaSeleccionado >= 1 && diaSeleccionado <= 15) {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = canvas.width / 4;

        let progress = 0; // Variable para el progreso de la animación
        const maxProgress = 100; // Valor máximo para el progreso (100%)
        const animationSpeed = 0.5; // Velocidad de la animación (ajusta según preferencia)

        function drawLuna() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const currentProgress = progress / maxProgress;
            const endAngle = 2 * Math.PI * currentProgress;

            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, endAngle);
            ctx.fillStyle = '#fff';
            ctx.shadowColor = '#fff';
            ctx.shadowBlur = 20;
            ctx.fill();
            ctx.closePath();

            if (progress < maxProgress) {
                progress += animationSpeed;
                requestAnimationFrame(drawLuna);
            } else {
                alert("Este día hay luna llena!");
            }
        }

        drawLuna();
    }

    if (diaSeleccionado >= 16 && diaSeleccionado <= 31) {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = canvas.width / 4;

        let progress = 0; // Variable para el progreso de la animación
        const maxProgress = 100; // Valor máximo para el progreso (100%)
        const animationSpeed = 0.5; // Velocidad de la animación (ajusta según preferencia)

        function drawLuna() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const currentProgress = progress / maxProgress;
            const startAngle = Math.PI / 2;
            const endAngle = Math.PI * 1.5 * currentProgress;

            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
            ctx.lineTo(centerX, centerY - radius);
            ctx.fillStyle = '#fff';
            ctx.shadowColor = '#fff';
            ctx.shadowBlur = 20;
            ctx.fill();
            ctx.closePath();

            if (progress < maxProgress) {
                progress += animationSpeed;
                requestAnimationFrame(drawLuna);
            } else {
                alert("Este día hay media luna!");
            }
        }

        drawLuna();
    }
}


/**
* La función window.onload se ejecuta cuando se carga la página y  genera los elementos canvas en la tabla del calendario.
* @method window.onload
* @param {void} No recibe parámetros.
* @return No retorna ningún valor.
*/
window.onload = function () {
    // Generar el canvas para cada día de la tabla
    const tabla = document.querySelector('.calendario');
    const filas = tabla.getElementsByTagName('tr');

    for (let i = 1; i < filas.length; i++) {
        const celdas = filas[i].getElementsByTagName('td');
        for (let j = 0; j < celdas.length; j++) {
            const dia = celdas[j].innerText;
            const canvasId = "canvas" + dia;
            const canvas = document.createElement('canvas');
            canvas.id = canvasId;
            canvas.className = "lun";
            canvas.width = 150;
            canvas.height = 160;
            celdas[j].appendChild(canvas);
        }
    }
};

/**
 * La función resetear restablece la fecha y los elementos canvas.
 * @method resetear
 * @param {void} No recibe parámetros.
 * @return No retorna ningún valor.
 */
function resetear() {
    // Restablece los valores y los elementos
    document.getElementById('fecha').value = ''; // Restablecer el valor de fecha
    const canvasList = document.getElementsByClassName('lun'); // Obtener lista de elementos canvas
    for (let i = 0; i < canvasList.length; i++) {
        const canvas = canvasList[i];
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el contenido de cada canvas
    }
};


