import React, { useState } from "react";

function RecipeCreate({ onSubmit }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  

  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = { name, cuisine, photo, ingredients, preparation };
    onSubmit(newRecipe);

    // Clear the form fields after submission
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  return (
    
    <form className="row g-3" onSubmit={handleSubmit} name="create">
      <div className="col-md-6">
        <label htmlFor="recipeName" className="form-label">
          Name
        </label>
        <input
          name="name"
          type="text"
          className="form-control"
          id="recipeName"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="recipeCuisine" className="form-label">
          Cuisine
        </label>
        <input
          name="cuisine"
          type="text"
          className="form-control"
          id="recipeCuisine"
          value={cuisine}
          onChange={(event) => setCuisine(event.target.value)}
          required
        />
      </div>
      <div className="col-12">
        <label htmlFor="recipePhoto" className="form-label">
          Photo URL
        </label>
        <input
          name="photo"
          type="url"
          className="form-control"
          id="recipePhoto"
          value={photo}
          onChange={(event) => setPhoto(event.target.value)}
          required
        />
      </div>
      <div className="col-12">
        <label htmlFor="recipeIngredients" className="form-label">
          Ingredients
        </label>
        <textarea
          name="ingredients"
          className="form-control"
          id="recipeIngredients"
          rows="3"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="col-12">
        <label htmlFor="recipePreparation" className="form-label">
          Preparation
        </label>
        <textarea
          name="preparation"
          className="form-control"
          id="recipePreparation"
          rows="3"
          value={preparation}
          onChange={(event) => setPreparation(event.target.value)}
          required
        ></textarea>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Submit Recipe
        </button>
      </div>
    </form>
      
  );
}

export default RecipeCreate
