/**
 * Created by AlexLand on 2017-01-21.
 */
import React from 'react';
import Popover from 'material-ui/Popover';
import {Card, CardText} from 'material-ui/Card';
import '../css/DefinitionPopover.css';

class DefinitionPopover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            text: props.text,
            description: props.description
        };
    }

    handleTouchTap = (event) => {
        this.setState({
            open: true,
            anchorEl: event.currentTarget
        });
    };

    handleRequestClose = (event) => {
        this.setState({
            open: false,
        });
    };

    render() {
        return (
            <span className="definition">
                <a onTouchTap={this.handleTouchTap}>
                    {this.state.text}
                </a>
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose}
                >
                    <Card>
                        <CardText>
                            {this.state.description}
                        </CardText>
                    </Card>
                </Popover>
            </span>
        );
    }
}

export default DefinitionPopover;
