// THIS IS A SIMPLE 10 PERCENT TIP CALCULATOR WHICH OUTPUTS THE VALUE, TIP, AND TOTAL OF VALUE PLUS TIP

function zahlenRechner(geld) {
  const tip = geld / 10;
  const total = geld * 1.1;

  // RESULTS OUTPUT
  console.log("SUBTOTAL", geld);
  console.log("10PERCENT TIP", tip);
  console.log("TOTAL SUM", total);
}

function main() {
  zahlenRechner(128.55);
}

main();
