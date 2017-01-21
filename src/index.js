import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//API Client Demo Code
// import SpoonacularClient from "./api/SpoonacularClient";
// let client = new SpoonacularClient();
// client.searchRecipes('chicken', 10, (data) => {console.log('Search Results: ' + data)});
// client.getRecipeInfoById(156992, (data) => {
//   console.log("Recipe Info: ");
//   console.log(data)
// });
// client.getRandomRecipe((data) => {
//   console.log('Random Recipe: ' + JSON.stringify(data));
// });

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
