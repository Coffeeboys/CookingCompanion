/**
 * Created by AlexLand on 2017-01-21.
 */
import artyom from '../../../node_modules/artyom.js/build/artyom';
import React, {Component} from 'react';
// import Commands from '../../constants/Commands';

const commands = [
    {
        indexes: ["hello", "hi", "hey"],
        action: () => artyom.say("Hey there!")
    },
    {
        smart: true,
        indexes: ["How much * do I need?", "How many * do I need?"],
        action: (i, wildcard) => {
            console.log("Voice command: " + commands[1].indexes[i] + " with wildcard " + wildcard);
        }
    }
];

class VoiceComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Artyom lies here.
            </div>
        )
    }
}

export default VoiceComponent;