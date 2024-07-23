/*const peso = 170;
const altura = 1.68;
imc = peso / (altura * altura);

console.log(imc.toFixed(2));

let gasolina = 5.48;
let media = 9;
let distancia = 100;

var mediaGasolina = gasolina / media;
var valorTotal = mediaGasolina * distancia;

console.log(
  `A média de combustível é ${mediaGasolina.toFixed(
    2
  )} e o valor total a ser gasto é ${valorTotal.toFixed(2)}`
);*/

/*let semanasPorAno = 48;
let idade = 68;
let calculoSemanas = semanasPorAno * idade;
let semanasVividas = 0;
let semanasFaltaViver = 48 * 70;
let valorTotalSemanas = semanasFaltaViver - calculoSemanas;

console.log(
  `Você já viveu ${calculoSemanas.toFixed(
    0
  )} semanas, e ainda falta viver ${valorTotalSemanas} semanas!`
);*/

var n1 = 8;
var n2 = 2;
var op = "*";
let calculo = 0;

switch (op) {
  case "+":
    calculo = n1 + n2;
    console.log(`${n1} ${op} ${n2}: ${calculo}`);
    break;
  case "-":
    calculo = n1 - n2;
    console.log(`${n1} ${op} ${n2}: ${calculo}`);
    break;
  case "*":
    calculo = n1 * n2;
    console.log(`${n1} ${op} ${n2}: ${calculo}`);
    break;
  case "/":
    if (n2 != 0) {
      calculo = n1 / n2;
      console.log(`${n1} ${op} ${n2}: ${calculo.toFixed(1)}`);
    } else {
      console.log(`Impossível divisão por zero`);
      break;
    }
  default:
    return 0;
}
