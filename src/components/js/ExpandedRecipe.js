/**
 * Created by Aarjente! on 1/21/2017.
 */
import React from 'react';
import IngredientsCard from './IngredientsCard';
import DirectionsCard from './DirectionsCard';
import '../css/ExpandedRecipe.css'
import SpoonacularClient from "../../api/SpoonacularClient";

class ExpandedRecipe extends React.Component {
    constructor(props) {
        super(props);
        let client = new SpoonacularClient();
        console.log(props.params);
        client.getRecipeInfoById(props.params.recipeId, (data) => {
            this.setState({
                recipeData: data
            });
        });
    }

    render() {
        if (this.state) {
            const ingredients = this.state.recipeData.extendedIngredients;
            const directions = this.state.recipeData.analyzedInstructions[0].steps;
            return (
                <div className="expanded-recipe">
                    <IngredientsCard ingredients={ingredients}/>
                    <DirectionsCard directions={directions}/>
                </div>
            )
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

export default ExpandedRecipe;
