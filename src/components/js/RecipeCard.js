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
import Routes from "../../constants/Routes";


class RecipeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            description: props.description,
            expanded: false
        };
    }

    getTitle = () => {
        return this.state.title;
    };

    getDescription = () => {
        return this.state.description;
    };

    openRecipe = (recipe) => {
        this.expanded = !this.expanded;
        if (this.expanded) {
            console.log(recipe.title + " expanded.");
        }
        else {
            console.log(recipe.title + " collapsed.");
        }

    };

    render() {
        const recipe = {
            id: 593020,
            title: this.getTitle(),
            description: this.getDescription()
        };
        return (
            <div>
                <Card className="recipe-card">
                    <CardHeader title={recipe.title} subtitle="Subtitle of recipe" showExpandableButton={true}/>
                    <CardText expandable={true}>{recipe.description}</CardText>
                    <CardActions>
                        <Link to={"/recipe/" + recipe.id}>
                            <RaisedButton
                                icon={<RoomService color={fullWhite}/>}
                                backgroundColor="#448AFF"
                                className="cook-button"
                            />
                        </Link>
                    </CardActions>
                    <CardActions>
                        <Link to={Routes.NAVIGATOR}>
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

