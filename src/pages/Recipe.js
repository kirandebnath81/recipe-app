import React, { useEffect, useState, useContext } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../context/Context";
import { ACTIONS } from "../context/Actions";
import { Button } from "../components/styles/Home.styles";
import {
  Wrapper,
  Container,
  Description,
  AddButton,
} from "../components/styles/Recipe.styles";
import { ThemeContext } from "../DarkMode/Context";

export const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [view, setView] = useState(true);
  const [viewSummary, setViewSummary] = useState(false);
  const { recipeId } = useParams();

  const { dispatch } = useContext(RecipeContext);
  const themeMode = useContext(ThemeContext)[0];

  useEffect(() => {
    getRecipe(recipeId);
  }, [recipeId]);

  //api call
  const getRecipe = async (id) => {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information`,
      { params: { apiKey: process.env.REACT_APP_API_KEY } }
    );

    setRecipe(data);
    setIngredients(data.extendedIngredients);

    try {
    } catch (error) {
      console.log("error occured", error);
    }
  };

  const styles = {
    instruction: {
      backgroundColor: view ? "var(--back-ground-color)" : "white",
      color: view ? "white" : "black",
    },
    ingredient: {
      backgroundColor: view ? "white" : "var(--back-ground-color)",
      color: view ? "black" : "white",
    },
  };

  return (
    <Container mode={themeMode}>
      <Wrapper>
        <AddButton
          onClick={() =>
            dispatch({
              type: ACTIONS.ADD_RECIPE,
              payload: { recipeData: recipe },
            })
          }
        >
          Add to cookList
        </AddButton>
        <h3>{recipe.title}</h3>
        <img src={recipe.image} alt="" />
      </Wrapper>
      <Description>
        <div className="btns">
          <Button onClick={() => setView(true)} style={styles.instruction}>
            Instructions
          </Button>
          <Button onClick={() => setView(false)} style={styles.ingredient}>
            Ingredients
          </Button>
        </div>

        {view ? (
          <div className="description">
            <div
              className="instructions"
              dangerouslySetInnerHTML={{ __html: recipe.instructions }}
            ></div>

            <Button
              className="summaryBtn"
              onClick={() => setViewSummary(!viewSummary)}
            >
              Summary
            </Button>
            {viewSummary && (
              <div
                className="summary"
                dangerouslySetInnerHTML={{ __html: recipe.summary }}
              ></div>
            )}
          </div>
        ) : (
          <div className="ingredients">
            {ingredients.map((ingredient) => (
              <ul>
                <li key={ingredient.id}>{ingredient.original}</li>
              </ul>
            ))}
          </div>
        )}
      </Description>
    </Container>
  );
};
