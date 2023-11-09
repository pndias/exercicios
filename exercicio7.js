const pi = 3.14159265;

function perimeter(r) {
  const p = 2 * pi * r;
  console.log("O perímetro é: ", p);
}
function area(r) {
  const a = pi * r ** 2;
  console.log("A área é: ", a);
}
function volume(r) {
  const v = (4 / 3) * pi * r ** 3;
  console.log("O Volume é: ", v);
}
function main() {
  perimeter(7);
  area(7);
  volume(7);
}
main();
