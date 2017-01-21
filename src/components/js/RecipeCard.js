/**
 * Created by AlexLand on 2017-01-21.
 */
import "../css/RecipeCard.css";
import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RoomService from 'material-ui/svg-icons/places/room-service';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import {fullWhite} from'material-ui/styles/colors';


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
                    <CardHeader title={recipe.title} subtitle={recipe.cuisine} showExpandableButton={true}/>
                    <CardText expandable={true}>{recipe.description}</CardText>
                    <CardActions>
                        <Link to={{pathname: "/recipe/" + recipe.id, state: recipe}}>
                        <RaisedButton
                            icon={<RoomService color={fullWhite}/>}
                            backgroundColor="#448AFF"
                            className="cook-button"
                        />
                        </Link>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default RecipeCard;

