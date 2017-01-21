/**
 * Created by AlexLand on 2017-01-21.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RecipeList from './RecipeList.js';
import AppBar from 'material-ui/AppBar';

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Cooking Companion"/>
                    <RecipeList />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;