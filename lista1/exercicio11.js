//This is an imperial to metric system length calculator.

function imperialToSi(x, unit) {
  const inch = 25.3995;
  const foot = 12 * inch;
  const yard = 3 * foot;
  const mile = 1760 * yard;
  let resultado = 0;
  switch (unit) {
    case "in":
      resultado = (x * inch) / 1000000;
      break;
    case "ft":
      resultado = (x * foot) / 1000000;
      break;
    case "yd":
      resultado = (x * yard) / 1000000;
      break;
    case "mi":
      resultado = (x * mile) / 1000000;
  }

  console.log(resultado, "Kilometros");
}

//imperialToSi(1000, "yd");
imperialToSi(1004938, "ft");
