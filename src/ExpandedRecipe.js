/**
 * Created by Aarjente! on 1/21/2017.
 */
import React from 'react';
import IngredientsCard from './IngredientsCard';
import DirectionsCard from './DirectionsCard';
import './ExpandedRecipe.css'

class ExpandedRecipe extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const ingredients = [
            "Apples",
            "Pie Crust",
            "Sugar",
            "Pie Tray"
        ];
        const directions = [
            "Slice apples",
            "Place apples in pie crust",
            "???",
            "Bakeit"
        ];
        return (
            <div className="expanded-recipe">
                <IngredientsCard ingredients={ingredients}/>
                <DirectionsCard directions={directions}/>
            </div>
        )
    }
}

export default ExpandedRecipe;
