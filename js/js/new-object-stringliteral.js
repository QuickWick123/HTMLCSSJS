// var company = new Object();
// company.name = "Facebook";
// // console.log(company);
// // console.log(company.name);
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";
// console.log(company);
// console.log("Company CEO name is: " 
//     + company.ceo.firstName);

// console.log(company["name"]);
// console.log(company["ceo"]);
// console.log(company.ceo["firstName"]);

// company["stock of company"] = 110;
// console.log(company);
// console.log("stock price is: " + company["stock of company"]);
// console.log("----");
// console.log("----");

// var stockPropName = "stock of company";
// company[stockPropName] = 110;
// console.log("Stock price is: " + company[stockPropName]);


var facebook = {
    name: "Facebook",
    ceo: {
        firstName: "Mark",
        favColor: "blue"
    },
    $stock: 110,
    "stock of company": 200
};

console.log(facebook);
console.log(facebook.ceo.firstName);
