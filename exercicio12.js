function coneCalc(a, b, h) {
  const pi = 3.14159265;
  const volume = ((pi * h) / 3) * (b ** 2 + b * a + a ** 2);
  const geratriz = h ** 2 + (b - a) ** 2;
  const area = (pi * b) ** 2 + (pi * a) ** 2 + pi * geratriz;

  console.log("A área do tronco de cone é:", area);
  console.log("O volume do tronco de cone é:", volume);
}

coneCalc(14.5, 20.34, 31.23);
