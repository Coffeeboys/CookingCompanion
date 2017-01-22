/**
 * Created by AlexLand on 2017-01-21.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


class App extends React.Component {

    componentWillMount() {

    }
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Yell At Your Food"
                            onTitleTouchTap={() => window.location = "/"}
                            />
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}


export default App;