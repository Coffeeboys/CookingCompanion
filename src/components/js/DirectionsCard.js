/**
 * Created by Aarjente! on 1/21/2017.
 */
import React from 'react';
import '../css/DirectionsCard.css';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
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
                </Card>
            </div>
        )
    }
}

export default DirectionsCard;