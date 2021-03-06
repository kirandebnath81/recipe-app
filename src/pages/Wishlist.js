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
import { ThemeContext } from "../DarkMode/Context";

export const Wishlist = () => {
  const { wishList, dispatch } = useContext(RecipeContext);
  const themeMode = useContext(ThemeContext)[0];

  return (
    <Container>
      {wishList.map((recipe) => (
        <Card key={recipe.id} mode={themeMode}>
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
                  type: ACTIONS.ADD_COOKED,
                  payload: { cooked: recipe, cookedRecipeId: recipe.id },
                })
              }
            >
              Cooked
            </Button>
          </div>
        </Card>
      ))}
    </Container>
  );
};
