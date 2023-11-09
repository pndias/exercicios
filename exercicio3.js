const a = 1.5;
const b = 4;
const c = 2;
const d = 3;
const e = 1.2;
const f = 4.3;

function calcA(a, b, c, d, e, f) {
  const resultado = (a * (c + d)) / (b * (e + f));
  console.log(resultado);
}
function calcB(a, b, c, d, e, f) {
  const resultado = a ** (b + c) / (e + f) + d;
  console.log(resultado);
}
function calcC(a, b, c, d, e, f) {
  const resultado = (a + (c + d) ** 2 / b ** 2) * (1 / c);
  console.log(resultado);
}
function calcD(a, b, c, d, e, f) {
  const resultado = (-b + b ** 1.5 - 4 * a * c) / (2 * a);
  console.log(resultado);
}

function main() {
  calcA(a, b, c, d, e, f);
  calcB(a, b, c, d, e, f);
  calcC(a, b, c, d, e, f);
  calcD(a, b, c, d, e, f);
}
main();
