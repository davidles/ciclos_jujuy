//For

let arrUsers = ['Amadeo', 'Ezequiel', "Elisa", "Nacho", "David", "Lika", "Rocio"]

/** */
for (let i = 0; i < arrUsers.length; i++) {
  console.log(arrUsers[i])
}

function addUser(arrList) {

  let arrNewUsers = ['Juan', 'Pedro']

  for (let i = 0; i < arrNewUsers.length; i++) {
    arrList.push(arrNewUsers[i])
  }

  return arrList;

}

let newUserList = addUser(arrUsers)

console.log(newUserList)


// While
let index = 0;

while (index < arrUsers.length) {
  console.log("Bienvenidxs ", arrUsers[index]);

  /** Linea de code, que eventualmente modifique el valor de la condicion - False - */
  index++;

}





// Do While

// console.log(arrUsers[0])

let indexDo = 5
do {
  console.log("Entre")
  // console.log(arrUsers[indexDo]);
  indexDo++;
} while (indexDo < arrUsers.length);

















/***** Browser *****/
let num;
let respuesta = 's';

while (respuesta.toLowerCase() === 's') {
  // Solicitar al usuario un número
  num = parseInt(prompt("Ingrese un número:"));

  // Imprimir el cuadrado del número ingresado
  console.log("El cuadrado del número es:", num * 2);

  // Preguntar al usuario si desea continuar
  respuesta = prompt("Desea ingresar otro número? (s/n)");
}

// let intentos = 1;
// let user;
// let pass;


do {
  user = prompt("Ingrese nombre de usuario:");
  pass = prompt("Ingrese contraseña:");

  if (user === "pepe" && pass === "1234") {
    console.log("Bienvenido Pepe");
  } else {
    intentos++
    console.log("sus credenciales son incorrectas, intente nuevamente");
  }



} while ((user !== "pepe" || pass !== "1234") && intentos <= 3);