import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App.js';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import ExpandedRecipe from './ExpandedRecipe';
import RecipeList from './RecipeList';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={RecipeList}/>
            <Route path="recipe/:recipeid" component={ExpandedRecipe}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
