function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function eleccion(jugada) {
  let resultado = "";
  if (jugada == 1) {
    resultado = "Piedra 🪨";
  } else if (jugada == 2) {
    resultado = "Papel 📃";
  } else if (jugada == 3) {
    resultado = "Tijera ✂️";
  } else {
    resultado = "MAL ELEGIDO";
  }
  return resultado;
}

// 1 = piedra,  2 = papel,  3 = tijera
let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;

while (triunfos < 3 && perdidas < 3) {
  let min = 1;
  let max = 3;
  let pc = aleatorio(min, max);

  jugador = prompt("Elige 1 para piedra, 2 para papel y 3 para tijera");
  // alert("Elegiste " + jugador);

  alert("PC elige: " + eleccion(pc));
  alert("Tú eliges: " + eleccion(jugador));

  // COMBATE
  if (pc == jugador) {
    alert("EMPATE");
  } else if (jugador == 1 && pc == 3) {
    alert("GANASTE");
    triunfos = triunfos + 1;
  } else if (jugador == 2 && pc == 1) {
    alert("GANASTE");
    triunfos = triunfos + 1;
  } else if (jugador == 3 && pc == 2) {
    alert("GANASTE");
    triunfos = triunfos + 1;
  } else {
    alert("PERDISTE");
    perdidas = perdidas + 1;
  }
}

alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.");
