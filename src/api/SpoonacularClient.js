/**
 * Created by Trevor on 1/21/2017.
 */

import 'ajax';
import * as $ from "jquery";

let API_KEY = 'hjjrAR0vfumshF23Jto21D5tpHwFp1TSPs2jsntd6BU17fFKRY';
let ENDPOINT = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/';
let HEADERS = {
  'X-Mashape-Key' : API_KEY,
      'Accept' : 'application/json',
};
let OPTIONS = {
  headers : HEADERS,
};

class SpoonacularClient {
  searchRecipes(searchQuery, maxSearchResults, callback) {
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

  getRandomRecipe(callback) {
    $.ajax(ENDPOINT + 'recipes/random?number=1', OPTIONS).done((data) => {
      if (data.recipes.length > 0) {
        callback(data.recipes[0]);
      } else {
        callback(null);
      }
    });
  }
}

export default SpoonacularClient;
