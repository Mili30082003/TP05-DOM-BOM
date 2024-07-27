//Numero Maximo 
let max = 100;
//Numero Minimo 
let min = 1;
//Numero Aleatorio
let numero_Secreto =Math.random()*(max-min) + min;
numero_Secreto = parseInt (numero_Secreto);

console.log(numero_Secreto);

//Guardar Mensaje
function numero_secreto() {
    let mensaje = "Ingresa un numero para adivinar el numero magico";
while(true){//uso el while hasta que el usuario adivine el numero
   let numero_del_usuario = prompt(mensaje, "0"); //pongo 0 por si el usuario no ingresa nada
   numero_del_usuario = parseInt(numero_del_usuario);
   
   if (numero_del_usuario === numero_Secreto) {
    alert ("Ganaste!, Adivinaste el numero secreto");
    break;
    
   }else if (numero_del_usuario === 0) {
       break;
   }
    else if (numero_del_usuario < numero_Secreto) {
mensaje = "Lo sentimos, el numero que ingresaste es menor que el numero magico";
    
   } else if (numero_del_usuario > numero_Secreto) {
    mensaje = "Lo sentimos, el numero que ingresaste es mayor que el numero magico";
   }}
}
