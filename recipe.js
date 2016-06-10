'use strict';

var recipe = {};

function addIngredient(recipe, ingredient, amount) {
	recipe[ingredient] = amount;
	return recipe;
}

function removeIngredient(recipe, ingredient) {
	// console.log(recipe);
	delete recipe[ingredient];
	// console.log(recipe);
	return recipe;
}

function updateIngredient(recipe, ingredient, amount) {
	recipe[ingredient] = amount;
	return recipe;
}

function readRecipe(recipe) {
	for (var ingredient in recipe) {
		console.log("this recipe calls for " + recipe[ingredient] + " of " + ingredient + "");
	}
}

var cake = {butter: "2 sticks", sugar: "2 cups" };


addIngredient(recipe, "butter", "2 sticks");
addIngredient(recipe, "vanilla", "one teaspoon");
addIngredient(recipe, "sugar", "2 cups");
console.log(recipe);
removeIngredient(recipe, "vanilla");
console.log(recipe);
console.log(cake);
// console.log(recipe == cake);
readRecipe(recipe);