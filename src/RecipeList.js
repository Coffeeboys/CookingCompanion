import React from 'react';
import './RecipeList.css';
import RecipeCard from './RecipeCard.js';

class RecipeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [
                {
                    title: "Chicken Teriyaki",
                    description: "Chicken and vegetables with a teriyaki sauce served over rice"
                },
                {
                    title: "Pizza",
                    description: "Vegetables and meat with sauce on a dough crust"
                },
                {
                    title: "Apple Pie",
                    description: "Dessert with apples"
                }
            ]
        };
    }

    render() {
      const recipes = this.state.recipes;
        return (
            <div>
                {recipes.map(recipe => <RecipeCard title={recipe.title} description={recipe.description}/>)}
            </div>
        );
    }
}

export default RecipeList;
