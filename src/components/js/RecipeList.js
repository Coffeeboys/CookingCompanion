import React from 'react';
import '../css/RecipeList.css';
import RecipeCard from './RecipeCard.js';

class RecipeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [
                {
                    id: 1,
                    title: "Chicken Teriyaki",
                    description: "Chicken and vegetables with a teriyaki sauce served over rice"
                },
                {
                    id: 2,
                    title: "Pizza",
                    description: "Vegetables and meat with sauce on a dough crust"
                },
                {
                    id: 3,
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
                {recipes.map((recipe, i) => <RecipeCard key={i} recipe={recipe}/>)}
            </div>
        );
    }
}

export default RecipeList;
