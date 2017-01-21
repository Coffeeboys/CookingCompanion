import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App.js';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import ExpandedRecipe from './components/js/ExpandedRecipe';
import RecipeList from './components/js/RecipeList';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// API Client Demo Code
import SpoonacularClient from "./api/SpoonacularClient";
let client = new SpoonacularClient();
client.searchRecipesAuto('chicken', 10, (data) => {console.log('Search Results: ' + data)});
client.getRecipeInfoById(156992, (data) => {
  console.log("Recipe Info: ");
  console.log(data)
});
client.getRandomRecipe((data) => {
  console.log('Random Recipe: ' + JSON.stringify(data));
});

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={RecipeList}/>
            <Route path="recipe/:recipeId" component={ExpandedRecipe}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
