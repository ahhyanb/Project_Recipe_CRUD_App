import React from "react";
import RecipeRow from "./RecipeRow";

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <section className="mt-3">
      <table className="table table-striped caption-top mb-0">
        <caption>{recipes.length} recipes listed.</caption>
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.length > 0 ? (
            recipes.map((recipe, index) => (
              <RecipeRow
                key={index}
                recipe={recipe}
                index={index}
                deleteRecipe={deleteRecipe}
              />
            ))
          ) : (
            <tr>
              <td colSpan="6">No recipes listed. Create one now!</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}

export default RecipeList;
