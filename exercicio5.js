function horasDia(x) {
  const dias = parseInt(x / 24);
  const horas = x % 24;
  console.log(x, "Horas são", dias, "dias e ", horas, "horas");
}
function main() {
  horasDia(84);
}
main();
