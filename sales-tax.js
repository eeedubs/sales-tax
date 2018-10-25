var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
// this is an array with 0 = Telus BC; 1 = Bombardier; 2 = Telus SK
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates){
  // salesData invokes companySalesData, taxRates invokes salesTaxRates
  var abTaxRate = taxRates["AB"];
  var bcTaxRate = taxRates["BC"];
  var skTaxRate = taxRates["SK"];
  var bomTotalSales = 0;
  var telusSalesBc = 0;
  var telusSalesSk = 0;
  for (var companies in salesData){ // array spots: 1 (telus BC), 2(bom AB), 3 (telus SK)
    for (var x in salesData[companies]["sales"]){
    // the sales figures from each company
      if (salesData[companies]["name"] == "Bombardier"){
       bomTotalSales += salesData[companies]["sales"][x];
      }
      else if ((salesData[companies]["name"] == "Telus") && (salesData[companies]["province"] == "BC")){
        telusSalesBc += salesData[companies]["sales"][x];
      }
      else if ((salesData[companies]["name"] == "Telus") && (salesData[companies]["province"] == "SK")){
        telusSalesSk += salesData[companies]["sales"][x];
      }
    }
  }
  var telusTaxBc = (telusSalesBc * bcTaxRate); // calculates telusTotalTax
  var telusTaxSk = (telusSalesSk * skTaxRate); // calculates telusTotalTax
  var telusTotalTax = (telusTaxBc + telusTaxSk); // used in final
  var telusTotalSales = (telusSalesBc + telusSalesSk); // used in final
  var bomTotalTax = (bomTotalSales * abTaxRate); // used in final

  var final = {
    "Telus": {
      "totalSales": telusTotalSales,
      "totalTaxes": telusTotalTax
    },
    "Bombardier": {
      "totalSales": bomTotalSales,
      "totalTaxes": bomTotalTax
    }
  }
  console.log(final);
}

var results = calculateSalesTax(companySalesData, salesTaxRates)
