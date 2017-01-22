import React from 'react';
import '../css/RecipeList.css';
import RecipeCard from './RecipeCard.js';
import SpoonacularClient from '../../api/SpoonacularClient'
import AutoCompleteText from './AutoCompleteText'
import {Card, CardHeader} from 'material-ui/Card'

let apiClient = new SpoonacularClient();

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
                        <AutoCompleteText fullWidth={true}callback={(searchInput) => {
                             apiClient.searchRecipes(searchInput,  (result) => {
                                this.setState({
                                    recipes: result.results,
                                });
                              })
                }}/></CardHeader>
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
