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

    openRecipe = () => {
        console.log(this.state.title + " clicked.");
    };

    render() {
        return (
            <div>
                <Card className="recipe-card">
                    <CardHeader title={this.getTitle()}/>
                    <CardText>{this.getDescription}</CardText>
                    <CardActions>
                        <RaisedButton
                            label="Expand"
                            primary="true"
                            onTouchTap={this.openRecipe()}
                        />
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default RecipeCard;

