/**
 * Created by AlexLand on 2017-01-21.
 */
import "./RecipeCard.css";
import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class RecipeCard extends Component {
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
        console.log(this.state.recipe + " clicked.");
    };

    render() {
        return <Card>
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
    }
}

export default RecipeCard;

