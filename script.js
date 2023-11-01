// importing food.json file to our local server
import  foods from "./foods.json" assert {type:"json"}; // import method

//const foods= require("./foods.json") //-->REQUIRED METHOD in order to run in our terminal


//list all the food items
console.log("list of all the food items");
const foodItems = foods.map((food)=>food);
console.log(foodItems);


//list all the food items with category Vegetable
console.log("list of all the food items with category Vegetable ");
const categoryVegetable = foods.filter( (food) => food.category==="Vegetable" );
console.log(categoryVegetable);


//list all the food items with category Fruit
console.log("list of all the food items with category Fruit");
const categoryFruit = foods.filter( (food) => food.category==="Fruit" );
console.log(categoryFruit);


//list all the food items with category Protein
 console.log("list of all the food items with category Protein");
 const categoryProtein = foods.filter( (food) => food.category==="Protein" );
 console.log(categoryProtein);


//list all the food items with category Nuts
console.log("list of all the food items with category Nuts ");
const categoryNuts = foods.filter( (food) => food.category==="Nuts" );
console.log(categoryNuts);


//list all the food items with category Grain
console.log("list of all the food items with category Grain");
const categoryGrain = foods.filter( (food) => food.category==="Grain" );
console.log(categoryGrain);


//list all the food items with category Dairy
console.log("list of all the food items with category Dairy");
const categoryDairy = foods.filter( (food) => food.category==="Dairy" );
console.log(categoryDairy);


// list all the food items with calorie above 100
console.log("list of all the food items with calorie above 100 ");
const categoryCalorieMore = foods.filter( (food) => food.calorie > 100 );
console.log(categoryCalorieMore);


// list all the food items with calorie below 100
console.log("list of all the food items with calorie below 100 ");
const categoryCalorieLess = foods.filter( (food) => food.calorie < 100 );
console.log(categoryCalorieLess);


//list all the food items with highest protien content to lowest
console.log("list of all the food items with highest protien content to lowest");
const categoryProteinDescOrder = foods.map((food) =>food).sort((p1,p2)=> p2.protiens- p1.protiens);
console.log(categoryProteinDescOrder);


//list all the food items with lowest cab content to highest
console.log("list of all the food items with lowest cab content to highest");
const categoryCabAsceOrder = foods.map((food)=>food).sort((c1,c2)=> c1.cab -c2.cab);
console.log(categoryCabAsceOrder);


