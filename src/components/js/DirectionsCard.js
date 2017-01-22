/**
 * Created by Aarjente! on 1/21/2017.
 */
import React from 'react';
import '../css/DirectionsCard.css';
import {
    Card,
    CardHeader,
    CardText,
    CardActions
} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton'
import NavigationIcon from 'material-ui/svg-icons/maps/navigation'
import Routes from '../../constants/Routes'
import {Link} from 'react-router';
import parseDefinitions from '../../utils/DefinitionParser';

class DirectionsCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            directions: props.directions
        };
    }
    render() {
        const directions = this.state.directions;
        if (directions.length < 1) {
            return (
                <Card className="directions-card">
                    <CardHeader title="Directions"/>
                    <CardText>
                        No Directions :(
                    </CardText>
                </Card>
            )
        }
        return (
            <div>
                <Card className="directions-card">
                    <CardHeader title="Directions"/>
                    <CardText>
                        <ol>
                            {directions.map((step, i) => <li key={i}>{parseDefinitions(step.step)}</li>)}
                        </ol>

                    </CardText>
                    <CardActions className="direction-button-container">
                        <Link to={{pathname: Routes.NAVIGATOR, state: directions}}>
                            <FloatingActionButton className="navigate-button" label="Action1">
                                <NavigationIcon />
                            </FloatingActionButton>
                        </Link>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default DirectionsCard;