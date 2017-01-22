/**
 * Created by Aarjente! on 1/21/2017.
 */
import React from 'react';
import IngredientsCard from './IngredientsCard';
import DirectionsCard from './DirectionsCard';
import '../css/ExpandedRecipe.css'

class ExpandedRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.recipe = this.props.location.state;
    }

    render() {
        const ingredients = this.recipe.extendedIngredients;
        const directions = this.recipe.analyzedInstructions[0].steps;
        return (
            <div className="expanded-recipe">
                <IngredientsCard ingredients={ingredients}/>
                <DirectionsCard directions={directions}/>
            </div>
        )
    }
}

export default ExpandedRecipe;
