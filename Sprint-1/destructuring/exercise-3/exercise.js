let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];                                                    

let sum=0;
console.log("QTY     ","ITEM                ","TOTAL");
for(const element of order){
  let {itemName, quantity, unitPricePence} = element;
  console.log(quantity.toString().padEnd(8,' '),itemName.padEnd(20,' '),(quantity*unitPricePence/100).toFixed(2));
  sum+=quantity*unitPricePence/100;
}
console.log(`Total: ${sum.toFixed(2)}`)