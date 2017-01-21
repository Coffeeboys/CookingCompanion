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

import DefinitionPopover from './DefinitionPopover';

class DirectionsCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            directions: props.directions
        };
    }
    render() {
        const directions = this.state.directions;
        return (
            <div>
                <Card className="directions-card">
                    <CardHeader title="Directions"/>
                    <CardText>
                        <ol>
                            {directions.map((step, i) => <li key={i}>{step.step}</li>)}
                        </ol>
                        Testing popover <DefinitionPopover text="here" description="This is a definition"/>.
                    </CardText>
                    <CardActions className="direction-button-container">
                        <Link to={Routes.NAVIGATOR}>
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