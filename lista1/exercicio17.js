function carPrice(x, pl, i) {
  var car = x;
  var profit = (car / 100) * pl;
  var taxes = (car / 100) * i;
  var final = car + profit + taxes;

  console.log("O lucro do distribuidor nesse veículo é de: ", profit, "Reais");
  console.log("O valor de impostos para esse veículo é de: ", taxes, "Reais");
  console.log("O valor final do veículo é de: ", final, "Reais");
}

carPrice(89000, 38, 27.5);
