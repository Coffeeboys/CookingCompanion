import React from 'react';
import logo from './logo.svg';
import './RecipeList.css';
import RecipeCard from './RecipeCard.js';

class RecipeList extends React.Component {

  render() {
    return (
      <div>
        <RecipeCard title="title" description="description"/>
      </div>
    );
  }
}

export default RecipeList;
