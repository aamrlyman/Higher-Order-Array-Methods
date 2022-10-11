// <<<<<<<<<<<<<<<<< DATA SET <<<<<<<<<<<<<<<<<
let dishes = [
  {
    id: 1,
    name: "Pizza",
    cuisine: "Italian",
    servings: 8,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 2,
    name: "Spaghetti",
    cuisine: "Italian",
    servings: 2,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 3,
    name: "Ravioli",
    cuisine: "Italian",
    servings: 2,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 4,
    name: "Enchiladas",
    cuisine: "Mexican",
    servings: 6,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 5,
    name: "Tacos",
    cuisine: "Mexican",
    servings: 4,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 6,
    name: "Burrito Supreme",
    cuisine: "Mexican",
    servings: 1,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 7,
    name: "Elote",
    cuisine: "Mexican",
    servings: 4,
    ingredients: ["corn", "cheese"],
  },
  {
    id: 8,
    name: "Crepes",
    cuisine: "French",
    servings: 1,
    ingredients: ["flour", "sugar"],
  },
  {
    id: 9,
    name: "Corned Beef & Cabbage",
    cuisine: "Irish",
    servings: 10,
    ingredients: ["beef", "cabbage"],
  },
  {
    id: 10,
    name: "Beef Stew",
    cuisine: "Irish",
    servings: 8,
    ingredients: ["beef", "tomato"],
  },
  {
    id: 11,
    name: "Lasagna",
    cuisine: "Vegetarian",
    servings: 8,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 12,
    name: "Falafel",
    cuisine: "Vegetarian",
    servings: 1,
    ingredients: ["chickpea", "parsley"],
  },
  {
    id: 13,
    name: "Chili",
    cuisine: "Vegetarian",
    servings: 13,
    ingredients: ["tomato", "chickpea"],
  },
  {
    id: 14,
    name: "Goulash",
    cuisine: "Hungarian",
    servings: 15,
    ingredients: ["beef", "tomato"],
  },
];

// <<<<<<<<<<<<<<<<< EXAMPLE FUNCTION <<<<<<<<<<<<<<<<<

// function findMexicanFood() {
//   let results = dishes.filter(function (el) {
//     if (el.cuisine === "Mexican") {
//       return true;
//     } else {
//       return false;
//     }
//   });

//   //Debug tip: Place a Breakpoint on the return AFTER the filter, then hover over "results" to see results of filter without having to step through the whole thing!

//   return results;
// }

// let mexicanFood = findMexicanFood();
// //console.log("Mexican Foods: ", mexicanFood);

// // <<<<<<<<<<<<<<<<< PROBLEMS <<<<<<<<<<<<<<<<<

// //1. Create a function that will return all dishes with the cuisine type of "vegetarian"
// //Filter

function findVegetarianDishes() {
  let results = dishes.filter( (el)=>{
    if(el.cuisine === "Vegetarian"){
      return true;
    }
    else{
      return false;
    }
  });
  return results;
}
let vegetarianFood = findVegetarianDishes();
console.log("Vegetarian Foods", vegetarianFood)

// //2. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
// //Filter

function findFiveServingsItalian() {
  let results = dishes.filter( (el)=>{
    if(el.cuisine === "Vegetarian" && el.servings > 5){
      return true;
    }
    else{
      return false;
    }
  });
  return results;
}
let fiveServingsItalianFood = findFiveServingsItalian();
console.log("Italian Foods", fiveServingsItalianFood)


// //3. Create a function that will return only dishes whose serving id number matches their serving count.
// //Filter

function findIdEqualsServings() {
  let results = dishes.filter( (el)=>{
    if(el.id === el.servings){
      return true;
    }
    else{
      return false;
    }
  });
  return results;
}
let servingsEqualsId = findIdEqualsServings();
console.log("Servings = Id", servingsEqualsId)

// //4. Create a function that will return only dishes whose serving count is even.
// //Filter

function findEvenServingsSizes() {
  let results = dishes.filter( (el)=>{
    if(el.servings % 2 === 0){
      return true;
    }
    else{
      return false;
    }
  });
  return results;
}
let EvenServingSizes = findEvenServingsSizes();
console.log("Dishes with even servings size quantities", EvenServingSizes)

// //5. Create a function that will return dishes whose ingredients array is "tomato" and "cheese".
// //Filter

function findTomatoAndCheese(arr, query1, query2) {
  return arr.filter((el) => 
  el.ingredients.includes(query1, query2)
  )

}
let tomatoAndCheeseFood = findTomatoAndCheese(dishes, "tomato", "cheese");
console.log("Tomato and Cheese Foods", tomatoAndCheeseFood)

// //6a. Create a function that will return an array of only the names of the cuisine types. Ie ['Italian', 'Mexican', ...]
// //Map

function mapCuisines( array = [{}]){
  let mappedresult = array.map((el) => `${el.cuisine} food`);
  return mappedresult;
}
let cuisineTypes = mapCuisines(dishes);
console.log("Different Cuisines", cuisineTypes ); 

//Find and filter w/For Loop
// function findCuisineTypes( array = [{}]){
//   let result = []
//   for(i = 0; i < array.length; i++){
//     if(result.includes(array[i].cuisine)) {
//     }
//     else{
//       result.push(array[i].cuisine + "Food")
//     }
//   }
//   return result
// }

// BONUS: (come back to this after finishing all)
//6b. Use the filter method to eliminate duplicates, leaving only distinct values in the array


function filterCuisineTypes(array){
    let filterCuisineTypes = array.filter( (el, index) => array.indexOf(el) === index);
    return filterCuisineTypes;
}
let filteredCuisineTypes = filterCuisineTypes(cuisineTypes);
console.log("unique cuisine types: ", filteredCuisineTypes)

//I spent a super long time on this, but ultimately decided to look it up because couldn't figure it out. 
// https://www.geeksforgeeks.org/how-to-remove-duplicate-elements-from-javascript-array/#:~:text=Use%20the%20filter()%20method,by%20simply%20adjusting%20our%20condition.
// How do you check the the content of an array that hasn't been created yet?

//7. Create a function that will append the cuisine type to the start of the dish's name. Ie, "Italian Pizza"
//Map

function findCuisinePlusDish(array){
  let cuisinePlusDish = array.map(el => 
    `${el.cuisine} ${el.name} `)
    return cuisinePlusDish;
}
let cuisinePlusDish = findCuisinePlusDish(dishes);
console.log("Cuisine + dish", cuisinePlusDish);




//8. Create a function that will append the cuisine type to the start of the dish's name. Then, return only the Vegetarian dish objects. So this function should return objects 11-13 with their names changed to "Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"
//Map, Filter

function filterVegetarianDishes(array){
  let filteredVegetarianDishes = array.filter(el => (el.includes("Vegetarian")))  
  return filteredVegetarianDishes;
}

let result = filterVegetarianDishes(findCuisinePlusDish(dishes));
console.log("Vegetarian Dishes", result)


// <<<<<<<<<<<<<<<<< BONUS <<<<<<<<<<<<<<<<<
//9. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter
function filterByIngredients(array){
  let chickpeaDishes = array.filter( el => el.ingredients.includes("chickpea"));
  return chickpeaDishes;
}
let chickpeaDishes = filterByIngredients(dishes);
console.log("Chickpea dishes", chickpeaDishes);


//10. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

function getServingCount(array){
  let servingCount = 0;
  for(const dish of array){
    servingCount += dish.servings;
  }
  return servingCount;
}

let servingCount = getServingCount(dishes);
console.log("Serving Count: ", servingCount)
//output 83

//11. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.
function uniqueCuisineType(array){
    let uniqueDishes = array.filter(dish1 => {
      let counter = 0;
      for(const dish2 of array){
        if(dish1.cuisine === dish2.cuisine){
          counter += 1
        }
      }
      return counter === 1;
    })
return uniqueDishes;
}

let uniqueDishes = uniqueCuisineType(dishes);
console.log("unique dishes", uniqueDishes)

