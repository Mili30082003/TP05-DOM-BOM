let numero_Secreto;
function comenzarJuego() {
//Numero Maximo 
let max = 100;
//Numero Minimo 
let min = 1;
//Numero Aleatorio
 numero_Secreto =Math.random()*(max-min) + min;
numero_Secreto = parseInt (numero_Secreto);
console.log(numero_Secreto);
document.getElementById('adivinanza').style.display = 'block';
}

//Guardar Mensaje
function adivinarNumero() {
    const numero_del_usuario = parseInt(document.getElementById('numeroUsuario').value);
 
   
   if (numero_del_usuario === numero_Secreto) {
    alert ("Ganaste!, Adivinaste el numero secreto");
    document.getElementById('adivinanza').style.display = 'none';

    
   }
    else if (numero_del_usuario < numero_Secreto) {
alert ("Lo sentimos, el numero que ingresaste es menor que el numero magico") ;
    
   } else if (numero_del_usuario > numero_Secreto) {
  alert("Lo sentimos, el numero que ingresaste es mayor que el numero magico") ;
   }}

