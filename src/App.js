/**
 * Created by AlexLand on 2017-01-21.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


class App extends React.Component {

    componentWillMount() {

        var commands = {
            'hello': function() { console.log('Hello world!'); }
        };

        window.annyang.addCommands(commands);

        window.annyang.start();
    }
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Cooking Companion"/>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}


export default App;