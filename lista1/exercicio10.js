function zahlenRechner(geld, percent) {
  const tip = (geld / 100) * percent;
  const total = (geld / 100) * (100 + percent);

  // RESULTS OUTPUT
  console.log("SUBTOTAL", geld);
  console.log("10PERCENT TIP", tip);
  console.log("TOTAL SUM", total);
}

function main() {
  zahlenRechner(128.55, 20);
}

main();
