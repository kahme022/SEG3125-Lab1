var products = [
	{
        name: "Salt",
        organic: false,
        vegetarian: true,
        kosher: true,
		glutenFree: true, 
        price: 1.99,
        //img from https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6ImNlZDhmYmQ0ZmIwNzViMTQ1MjE5ZGVmZDE0MzIyMzFiIiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=44cbdfe34321651f20cdccb3be5659afd2658270cdccc1eeda0c6c8a57074100
        img: "./img/salt.png",
        dairy: false,
        vegetable: false,
        meats: false,
        spices: true
	},
	{
		name: "Pepper",
        organic: false,
        vegetarian: true,
        kosher: true,
		glutenFree: false, 
        price: 1.99,
        //img from https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mccormick.com%2Fspices-and-flavors%2Fherbs-and-spices%2Fspices%2Fblack-pepper-coarse-ground&psig=AOvVaw1aVauXnVOoWM66W9Ee8U9-&ust=1592447244017000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDixbbmh-oCFQAAAAAdAAAAABAG
        img: "./img/pepper.png",
        dairy: false,
        vegetable: false,
        meats: false,
        spices: true
	},
	{
		name: "Cumin",
        organic: true,
        vegetarian: true,
        kosher: true,
		glutenFree: false, 
        price: 1.99,
        //img from https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mccormick.com%2Fgourmet%2Fspices-and-flavors%2Forganic%2Forganic-cumin-roasted-ground&psig=AOvVaw3dFxJ2DxTwsCUbwkiDjdpZ&ust=1592447296055000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiPxNDmh-oCFQAAAAAdAAAAABAD
        img: "./img/cumin.png",
        dairy: false,
        vegetable: false,
        meats: false,
        spices: true
	},
	{
		name: "Paprika",
        organic: true,
        vegetarian: true,
        kosher: true,
		glutenFree: false, 
        price: 1.99,
        //img from https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mccormick.com%2Fgourmet%2Fspices-and-flavors%2Forganic%2Forganic-paprika-smoked&psig=AOvVaw0ycFE4FLs9-paW8ktbLsHh&ust=1592447339477000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLiZvuTmh-oCFQAAAAAdAAAAABAD
        img: "./img/paprika.png",
        dairy: false,
        vegetable: false,
        meats: false,
        spices: true
	},
	{
		name: "Cheese",
        organic: false,
        vegetarian: true,
        kosher: true,
		glutenFree: true, 
        price: 5.99,
        //img from https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cheese.com%2Famerican-cheese%2F&psig=AOvVaw0UU3fCKQ7weOwtKlY4zUet&ust=1592446739609000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMi9u8bkh-oCFQAAAAAdAAAAABAP
        img: "./img/cheese.jpg",
        dairy: true,
        vegetable: false,
        meats: false,
        spices: false
	},
	{
		name: "Egg",
        organic: true,
        vegetarian: true,
        kosher: true,
		glutenFree: true, 
        price: 3.99,
        //img from https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dailymail.co.uk%2Fnews%2Farticle-7647153%2FMan-dies-trying-complete-50-egg-eating-challenge-falling-unconscious.html&psig=AOvVaw1cKYQ-wYlhzZkmmky0htry&ust=1592447383301000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCRk_vmh-oCFQAAAAAdAAAAABAD
        img: "./img/egg.jpg",
        dairy: true,
        vegetable: false,
        meats: false,
        spices: false
	},
	{
		name: "Milk",
        organic: false,
        vegetarian: true,
        kosher: true,
		glutenFree: true, 
        price: 7.99,
        //img from https://images.freshop.com/1564405684702319813/3fec6f7d8da4756e92820897cb1fc693_medium.png
        img: "./img/milk.png",
        dairy: true,
        vegetable: false,
        meats: false,
        spices: false
	},
	{
		name: "Greek Yogurt",
        organic: true,
        vegetarian: true,
        kosher: true,
		glutenFree: true, 
        price: 4.99,
        //img from https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.walmart.ca%2Fen%2Fip%2Flibert-greek-plain-0-mf-yogourt%2F6000194124295&psig=AOvVaw28xaxxvb7cy5fAHoCgNf5y&ust=1592447431421000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKi75ZDnh-oCFQAAAAAdAAAAABAD
        img: "./img/yogurt.jpg",
        dairy: true,
        vegetable: false,
        meats: false,
        spices: false
	},
	{
		name: "Onion",
        organic: false,
        vegetarian: true,
        kosher: true,
		glutenFree: true, 
        price: 2.99,
        //img from https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.medicalnewstoday.com%2Farticles%2F276714&psig=AOvVaw3QPLT0AJG99wEcGThdeHCl&ust=1592447481854000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCUsarnh-oCFQAAAAAdAAAAABAD
        img: "./img/onion.jpg",
        dairy: false,
        vegetable: true,
        meats: false,
        spices: false
	},
	{
		name: "Tomatoes",
        organic: false,
        vegetarian: true,
        kosher: true,
		glutenFree: true,
        price: 2.50,
        //img from https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6ImI2NmY5NGIxZTE2NzYzZmE5OWZhNzAyN2I1MGI2ZGExIiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=f9f21a46809f21277de6dff316f8658d91b3e08794a6930067d77520733a032e
        img: "./img/tomatoes.png",
        dairy: false,
        vegetable: true,
        meats: false,
        spices: false
    },
    {
		name: "Cilantro",
		organic: true,
        vegetarian: true,
        kosher: true,
		glutenFree: true,
        price: 5.50,
        //img from https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.medicalnewstoday.com%2Farticles%2F277627&psig=AOvVaw2RTBY-dMh-bKqO1G73W6C2&ust=1592447525373000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDMj73nh-oCFQAAAAAdAAAAABAD
        img: "./img/cilantro.jpg",
        dairy: false,
        vegetable: true,
        meats: false,
        spices: false
    },
    {
		name: "Potato",
		organic: false,
        vegetarian: true,
        kosher: true,
		glutenFree: true,
        price: 3.20,
        //img from https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bonappetit.com%2Fstory%2Fwhat-is-a-waxy-potato&psig=AOvVaw1DlFExWKZenoJXn8uBVuNI&ust=1592447591144000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjXkd3nh-oCFQAAAAAdAAAAABAD
        img: "./img/potato.jpg",
        dairy: false,
        vegetable: true,
        meats: false,
        spices: false
    },
    {
		name: "Lamb Shank",
		organic: true,
        vegetarian: false,
        kosher: true,
		glutenFree: true,
        price: 2.75,
        //img from https://www.google.com/url?sa=i&url=http%3A%2F%2Fmountainstatesrosen.com%2Four-lamb%2Flamb-cuts%2Flamb-shank&psig=AOvVaw3MGpESLkJPn9EdTsG5Og02&ust=1592447637580000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiI-_Pnh-oCFQAAAAAdAAAAABAD
        img: "./img/lamb.jpg",
        dairy: false,
        vegetable: false,
        meats: true,
        spices: false
    },
    {
		name: "Beef Sirloin",
		organic: false,
        vegetarian: false,
        kosher: true,
		glutenFree: true,
        price: 2.75,
        //img from https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.beefitswhatsfordinner.com%2Frecipes%2Frecipe%2F4681%2Fsirloin-steak-and-tomato-salad&psig=AOvVaw3xRhOz5C_Tp9MOapTFkenJ&ust=1592447687504000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCjg4voh-oCFQAAAAAdAAAAABAD
        img: "./img/sirloin.jpg",
        dairy: false,
        vegetable: false,
        meats: true,
        spices: false
    },
    {
		name: "Filet Mignon",
		organic: false,
        vegetarian: false,
        kosher: true,
		glutenFree: true,
        price: 2.75,
        //img from https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.snakeriverfarms.com%2Famerican-kobe-filet-mignon.html&psig=AOvVaw0dVH3TC_aiNNXB0hXQlWvN&ust=1592447738039000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMi2r6Poh-oCFQAAAAAdAAAAABAD
        img: "./img/filet.jpg",
        dairy: false,
        vegetable: false,
        meats: true,
        spices: false
	},
];


function getSelectedCheckboxValues(name) {
    const checkbox= document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkbox.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}


const searchBtn = document.querySelector('#search');
searchBtn.addEventListener('click', (event) => {
    listDiv = document.getElementById("productChoices");
    listDiv.innerHTML = "";
    let preferences = getSelectedCheckboxValues('preference');
    let categories = getSelectedCheckboxValues('categorization');
    let productList = getProducts(preferences, categories);
    populateListProduct(productList);
});

const addToCartBtn = document.querySelector('#addCart');
addToCartBtn.addEventListener('click', (event) => {
    listDiv = document.getElementById("crt");
    listDiv.innerHTML = "";
    let productsToCartNames = getSelectedCheckboxValues('product');
    let productsToCart = getCartItems(productsToCartNames);
    let cart = populateCart(productsToCart);
});

function getCartItems(productsToCart){
    let listOfProducts = [] 
    for(product in products){
        let name = products[product].name
        if(productsToCart.indexOf(name) >= 0){
            listOfProducts.push(products[product]);
        }
    }
    return listOfProducts;
}

function populateCart(productList){
    productList.sort((a, b) => (a.price > b.price) ? 1 : -1)
    var listDiv = document.getElementById("crt");
    let totalPrice = 0
    for(product in productList){
        let productName = productList[product].name;
        let productPrice = productList[product].price;
        totalPrice += productPrice;

        let label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
        listDiv.appendChild(label);
        
        listDiv.appendChild(document.createElement("br"));
    }
    let priceLabel = document.createElement('p')
    priceLabel.innerHTML = "Total Price: $" + totalPrice

    listDiv.appendChild(priceLabel);
}

function populateListProduct(productList){
    productList.sort((a, b) => (a.price > b.price) ? 1 : -1)
    var listDiv = document.getElementById("productChoices");
    for(product in productList){
        let productName = productList[product].name;
        let productPrice = productList[product].price;
        let productImg = productList[product].img;

        let checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product"; 
        checkbox.value = productName;
        listDiv.appendChild(checkbox)

        let img = document.createElement("img");
        img.src = productImg;
        img.width = 50;
        img.height = 50;
        listDiv.appendChild(img);

        let label = document.createElement('label')
        label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName  + ": $" + productPrice));
        listDiv.appendChild(label);
        
        listDiv.appendChild(document.createElement("br"));
        listDiv.appendChild(document.createElement("br"));
    }
}




function getProducts(preferences, categories) { 
    let productsList = []

    for(product in products){
        let toAdd = true;
        if(categories[0] == "noAdditional"){
           toAdd = true;
        }else{
            if(products[product][categories[0]] == true){
                toAdd = true;
            }else{
                toAdd = false
            }
        }
        for(preference in preferences){     
            if(products[product][preferences[preference]] == false){
                toAdd = false
            }     
        }
        if(toAdd){
            productsList.push(products[product])
        }
    }
    return productsList;
};