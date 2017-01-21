/**
 * Created by Trevor on 1/21/2017.
 */

import 'ajax';
import * as $ from "jquery";
//Trevor's Free Plan Key
//let API_KEY = 'hjjrAR0vfumshF23Jto21D5tpHwFp1TSPs2jsntd6BU17fFKRY';
//Evan's Hackathon Plan Key
let API_KEY = 'LlQw0cNXgpmshqvMOWLiLEE0kMzxp101R4YjsnY5IVBT9aQfXi'
let ENDPOINT = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/';
let HEADERS = {
  'X-Mashape-Key' : API_KEY,
      'Accept' : 'application/json',
};
let OPTIONS = {
  headers : HEADERS,
};

class SpoonacularClient {
  searchRecipesAuto(searchQuery, maxSearchResults, callback) {
    $.ajax(ENDPOINT + 'recipes/autocomplete?number=' + maxSearchResults + '&query=' + searchQuery,
      OPTIONS
    ).done(function(data) {
      callback(data);
    });
  }


  getRecipeInfoById(id, callback) {
    $.ajax(ENDPOINT + 'recipes/' + id + '/information', OPTIONS).done((data) => {
      callback(data);
    });
  }
    //returns {id, title, summary} Object
  getRecipeSummarybyId(id, callback){
      $.ajax(ENDPOINT + '/recipes/' + id + '/summary', OPTIONS).done((data) =>
        {
          callback(data);
        });
  }

  getRandomRecipes( number, callback) {
    $.ajax(ENDPOINT + 'recipes/random?number=' + number, OPTIONS).done((data) => {
      if (data.recipes.length > 0) {
        callback(data.recipes);
      } else {
        callback(null);
      }
    });
  }
  //hard to say how many ingredient names are supported...
  getunitConversionOfIngredient(ingredientName, value, srcUnit, targetUnit, callback){
      $.ajax(ENDPOINT + 'recipes/convert?ingreientName=' + ingredientName
             + '&sourceAmount=' + value
             + '&sourceUnit=' + srcUnit
             + '&targetUnit=' + targetUnit, OPTIONS).done((data) => {
            callback(data);
          });
  }

}

export default SpoonacularClient;
