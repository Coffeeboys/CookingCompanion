import React from 'react';
import '../css/RecipeList.css';
import RecipeCard from './RecipeCard.js';
import SpoonacularClient from '../../api/SpoonacularClient'
import AutoCompleteText from './AutoCompleteText'
import {Card, CardHeader} from 'material-ui/Card'

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
                <Card className="search-card">
                    <CardHeader fullWidth={true} className="search-box">
                        <AutoCompleteText fullWidth={true} callback={(searchInput) => {
                            apiClient.searchRecipesAuto(searchInput, maxSearchResults, (result) => {
                                {/*result.filter(recipe => recipe.analyzedInstructions);*/}
                                this.setState({
                                    recipes: result,
                                });
                            })
                        }}/>
                    </CardHeader>
                </Card>

                {
                  recipes !== [] ?
                    recipes.map((recipe, i) => <RecipeCard key={i} recipe={recipe}/>)
                    :
                    <div>
                      Loading...
                    </div>
                }
            </div>
        );
    }
}

export default RecipeList;
