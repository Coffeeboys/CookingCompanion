
import React from 'react';
import {
    Card,
    CardActions,
    CardHeader,
    CardText
} from 'material-ui/Card';
import "./PairCard.css";


class IngredientsCard extends React.Component {
    render() {
        return (
            <div>
                <Card className="pair-card">
                    <CardHeader
                        title={"Recipe Ingredients"}/>
                    <CardActions>
                    </CardActions>
                    <CardText>
                    </CardText>
                </Card>
            </div>
        )
    }
}

export default IngredientsCard;