import { recipes } from './data.js';
function IngredientsList({ ingredients }) {
  return (
    <ul>
      {ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
      ))}
    </ul>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
      <IngredientsList ingredients={recipe.ingredients}/>
          
       
        </div>
      )}
    </div>
  );
}
