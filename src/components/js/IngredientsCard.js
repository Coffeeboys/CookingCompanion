
import React, { Component }  from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import "../css/IngredientsCard.css";


class IngredientsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: props.ingredients
        };
    }
    render() {
        const ingredients = this.state.ingredients;
        return (
            <div>
                <Card className="ingredients-card">
                    <CardHeader title={"Ingredients"}/>
                    <CardText>
                        <ul>
                            {ingredients.map((ingredient, i) => <li key={i}>{ingredient.name}</li>)}
                        </ul>
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default IngredientsCard;