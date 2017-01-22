/**
 * Created by AlexLand on 2017-01-21.
 */
import "../css/RecipeCard.css";
import React from 'react';
import {Card, CardMedia, CardTitle, CardHeader} from 'material-ui/Card';
import {Link} from 'react-router';
import Routes from '../../constants/Routes';


class RecipeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    render() {
        const recipe = this.props.recipe;
        return (
            <div>
                <Card className="recipe-card">
                    <Link to={{pathname: Routes.RECIPE + recipe.id, state: recipe}}>
                        <CardHeader className="recipe-card-header"/>
                        <CardMedia
                            overlay={<CardTitle title={recipe.title} subtitle={recipe.cuisine}/>}
                        >
                            <img src={'https://spoonacular.com/recipeImages/' + recipe.image} height="500px"/>
                        </CardMedia>
                    </Link>
                </Card>
            </div>
        );
    }
}

export default RecipeCard;

