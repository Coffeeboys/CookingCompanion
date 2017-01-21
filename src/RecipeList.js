import React, { Component } from 'react';
import logo from './logo.svg';
import './RecipeList.css';
import AppBar from 'material-ui/AppBar';
import RecipeCard from './RecipeCard.js';

class RecipeList extends Component {
  render() {
    return (
      <div className="App">
        <AppBar title="Recipe List"/>
            <RecipeCard title="title" description="description"/>
        </div>
    );
  }
}

export default RecipeList;
