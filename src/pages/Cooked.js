import React, { useContext } from "react";

import { RecipeContext } from "../context/Context";
import { ACTIONS } from "../context/Actions";

import { Button } from "../components/styles/Home.styles";
import {
  Container,
  Card,
  Gradient,
} from "../components/styles/RecipeCart.styles";

import { Link } from "react-router-dom";

export const Cooked = () => {
  const { cooked, dispatch } = useContext(RecipeContext);

  return (
    <Container>
      {cooked.map((recipe) => (
        <Card key={recipe.id}>
          <img src={recipe.image} alt="" />
          <Gradient />
          <div className="title">{recipe.title}</div>
          <div className="btn">
            <Link to={`/recipe/${recipe.id}`}>
              <Button>Recipe</Button>
            </Link>

            <Button
              onClick={() =>
                dispatch({
                  type: ACTIONS.DELETE_RECIPE,
                  payload: { recipeId: recipe.id },
                })
              }
            >
              Delete
            </Button>
            <Button
              onClick={() =>
                dispatch({
                  type: ACTIONS.ADD_FAV,
                  payload: { favRecipe: recipe, favRecipeId: recipe.id },
                })
              }
            >
              Favourite
            </Button>
          </div>
        </Card>
      ))}
    </Container>
  );
};
