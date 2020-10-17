import React from 'react';

export default function Recipes (props) {
  return(
    <div>
      {
        props.recipes.map(recipe =>{
          return(
            <div key={recipe.id} class="card">
              <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">{recipe.name}
                  <i class="material-icons right">more_vert</i></span>
                  First Ingredient: {recipe.first_ingredient}
                  <br />
                  Second Ingredient: {recipe.second_ingredient}
                  <br />
                  Third Ingredient: {recipe.third_ingredient}
                  <br />
              </div>
              {/* <h4>Category: {recipe.category}</h4> */}
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  {/* {recipe.name} */}
                  <i class="material-icons right">close</i>
                </span>
                <p>Instructions: 
                  {recipe.instructions}
                </p>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}