const m = 0.51;
const n = 9.38 ^ 2;
const z = 4;
const a = 10;

function main(m, n, z, a) {
  const rA = a / z;
  console.log(rA);
  const rB = z * n + (z * m) / a;
  console.log(rB);
  const rC = (z * n + z * m) / a;
  console.log(rC);
  const rD = (1.0 * a) / z;
  console.log(rD);
}

main(m, n, z, a);
