var cuadro = document.getElementById('cuadro');
var primera = 0;
var segunda = 0;
var cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var pares = cartas.length;

cartas = cartas.concat(cartas);
cartas = cartas.sort(function () {
  return Math.random() - 0.5;
});

cartas.forEach(function (val) {
  var div = document.createElement('div');
  var imagen = document.createElement('img');
  imagen.src = 'assets/imagenes/' + ('img' + val) + '.jpg';

  imagen.className = 'tarjeta';

  div.id = val;
  div.className = 'tarjetas';

  div.appendChild(imagen);
  cuadro.appendChild(div);

  div.addEventListener('click', function (event) {
    var seleccionada = event.target;
    if (primera !== 0 && segunda !== 0) {
      if (primera.id !== segunda.id) {
        primera.classList.remove('abrir');
        segunda.classList.remove('abrir');
      }
      primera = 0;
      segunda = 0;
    }

    seleccionada.classList.add('abrir');
    if (primera === 0) {
      primera = seleccionada;
    } else {
      segunda = seleccionada;
      if (primera.id === segunda.id) {
        pares = pares - 1;

        racha = document.getElementById('racha');
        racha.value = parseInt(racha.value) + 1;
      } else {
        vida = document.getElementById('vida');
        vida.value = parseInt(vida.value) - 1;
        racha.value = 0;
      }
      if (pares === 0) {
        sweetAlert('Felicidades as ganado!!');
      }
      if (vida.value == 0) {
        sweetAlert('Perdiste mas suerte la proxima vez!!');
      }
    }
  });
});
