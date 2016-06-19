'use strict';

function addIngredient(hash,key,value){
 hash[key] = value;
 return hash;
}

function removeIngredient(hash,key,value){
	delete hash[key];
	return hash;
}

function updateIngredient(hash,key,value){
	hash[key] = value;
	return hash;
}

function readRecipe(hash){
  for (var i in hash){
   console.log("this recipe calls for "+ hash[i]+ " of "+ i);
  }
}