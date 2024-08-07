# Juego de Adivinanza

Este es un sencillo juego de adivinanza de números implementado con HTML, Bootstrap y JavaScript.

## Descripción

El juego genera un número aleatorio entre 1 y 100 cuando el usuario hace clic en el botón "Comenzar Juego". El usuario debe adivinar el número ingresando su suposición en un campo de entrada. Al hacer clic en el botón "Enviar", el juego le dirá al usuario si su suposición es correcta, mayor o menor que el número mágico.

## Características

- Genera un número aleatorio entre 1 y 100.
- Permite al usuario adivinar el número ingresando su suposición.
- Proporciona retroalimentación sobre si la suposición es correcta, mayor o menor que el número mágico.

## Requisitos

- Navegador web moderno.

## Cómo Jugar

1. Abre el archivo `index.html` en tu navegador web.
2. Haz clic en el botón "Comenzar Juego" para generar un número aleatorio.
3. Ingresa tu suposición en el campo de entrada.
4. Haz clic en el botón "Enviar" para comprobar tu suposición.
5. Recibirás un mensaje de alerta que te indicará si has adivinado el número, o si tu suposición es mayor o menor que el número mágico.

## Estructura del Proyecto

## Código

### HTML Y JS

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Juego de Adivinanza</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="container text-center">
        <h1 class="my-4">Juego de Adivinanza</h1>
        <button type="button" class="btn btn-info" onclick="comenzarJuego()">Comenzar Juego</button>
        <div id="adivinanza" style="display: none;" class="mt-4">
            <div class="form-group">
                <input type="number" id="numeroUsuario" class="form-control" placeholder="Ingresa un número">
            </div>
            <button type="button" class="btn btn-primary" onclick="adivinarNumero()">Enviar</button>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>


```js
let numeroSecreto;

function comenzarJuego() {
    const max = 100;
    const min = 1;
    numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(numeroSecreto);
    document.getElementById('adivinanza').style.display = 'block';
}

function adivinarNumero() {
    const numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    if (isNaN(numeroUsuario)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }
    if (numeroUsuario === numeroSecreto) {
        alert("¡Ganaste! Adivinaste el número secreto.");
        document.getElementById('adivinanza').style.display = 'none';
    } else if (numeroUsuario < numeroSecreto) {
        alert("Lo sentimos, el número que ingresaste es menor que el número mágico.");
    } else {
        alert("Lo sentimos, el número que ingresaste es mayor que el número mágico.");
    }
}


