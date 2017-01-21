/**
 * Created by AlexLand on 2017-01-21.
 */
import "./RecipeCard.css";
import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class RecipeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            description: props.description
        };
    }

    getTitle = () => {
        return this.state.title;
    };

    getDescription = () => {
        return this.state.description;
    };

    openRecipe = (recipe) => {
        console.log(recipe.title + " clicked.");
    };

    render() {
        const recipe = {
            title: this.getTitle(),
            description: this.getDescription()
        };
        return (
            <div>
                <Card className="recipe-card">
                    <CardHeader title={recipe.title}/>
                    <CardText>{recipe.description}</CardText>
                    <CardActions>
                        <RaisedButton
                            label="Expand"
                            primary={true}
                            onTouchTap={this.openRecipe.bind(this, recipe)}
                        />
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default RecipeCard;

