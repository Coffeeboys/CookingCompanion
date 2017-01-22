import React from 'react';
import '../css/RecipeList.css';
import RecipeCard from './RecipeCard.js';
import SpoonacularClient from '../../api/SpoonacularClient'
import AutoCompleteText from './AutoCompleteText'

let apiClient = new SpoonacularClient();
let maxSearchResults = 10;

class RecipeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        };
    }

    render() {
      const recipes = this.state.recipes;
        return (
            <div>
                <AutoCompleteText callback={(searchInput) => {
                  console.log(searchInput);
                  apiClient.searchRecipesAuto(searchInput, maxSearchResults, (result) => {
                    this.setState({
                        recipes: result,
                    });
                  })
                }}/>
                {recipes != null ?
                    recipes.map((recipe, i) => <RecipeCard key={i} recipe={recipe}/>)
                    :
                    <div/>
                }
            </div>
        );
    }
}

export default RecipeList;
