// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "potato",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 3.35
	},
	{
		name: "tomatoes",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 1.87
	},
	{
		name: "banana",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 2.89
	},
	{
		name: "chicken",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 7.65
	},
	{
		name: "steak",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 12.35
	},
	{
		name: "apples",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 3.45
	},
	{
		name: "honey",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 2.35
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "VegandGlutenFree") && ((prods[i].glutenFree == true) && (prods[i].vegetarian == true))){
			product_names.push(prods[i]);
		}
		else if ((restriction == "GlutenFreeandOrganic") && ((prods[i].glutenFree == true) && (prods[i].organic == true))){
			product_names.push(prods[i]);
		}
		else if ((restriction == "VegandOrganic") && ((prods[i].vegetarian == true) && (prods[i].organic == true))){
			product_names.push(prods[i]);
		}
		else if ((restriction == "VegandGlutenFreeandOrganic") && ((prods[i].glutenFree == true) && (prods[i].vegetarian == true) && (prods[i].organic == true))){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if (restriction == "None"){
			product_names.push(prods[i]);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return ("$" + totalPrice);
}