import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App.js';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import ExpandedRecipe from './components/js/ExpandedRecipe';
import RecipeList from './components/js/RecipeList';
import RecipeNavigator from "./components/js/RecipeNavigator";
import Routes from "./constants/Routes";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// API Client Demo Code
 import SpoonacularClient from "./api/SpoonacularClient";
let client = new SpoonacularClient();
//client.searchRecipesAuto('chicken', 10, (data) => {console.log('Search Results: ' + data)});
//client.getRecipeInfoById(156992, (data) => {
//  console.log("Recipe Info: ");
//   console.log(data)
// });
// client.getRandomRecipes(10,(data) => {
//    console.log(JSON.stringify(data));
//  });
//client.getRecipeSummarybyId(156992, (data => {console.log('Summary Results:' + data.summary)}));
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={RecipeList}/>
            <Route path={Routes.RECIPE + ":recipeId"} component={ExpandedRecipe}/>
            <Route path={Routes.NAVIGATOR} component={RecipeNavigator}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
