import React from 'react';
import '../css/RecipeList.css';
import RecipeCard from './RecipeCard.js';
import SpoonacularClient from "../../api/SpoonacularClient";

class RecipeList extends React.Component {
    constructor(props) {
        super(props);
        let client = new SpoonacularClient();
        client.getRandomRecipes(10,(data) => {
            data.filter(recipe => recipe.analyzedInstructions);
            this.setState({
                recipes: data
            });
         });

    }

    render() {
        if (this.state) {
            const recipes = this.state.recipes;
            return (
                <div>
                    {recipes.map((recipe, i) => <RecipeCard key={i} recipe={recipe}/>)}
                </div>
            );
        }
        else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }
}

export default RecipeList;
