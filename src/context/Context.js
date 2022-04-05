import { createContext, useEffect, useReducer } from "react";

import { AppReducer } from "./AppReducer";

//create context
export const RecipeContext = createContext();

//create initailState
const initalState = {
  wishList: JSON.parse(localStorage.getItem("recipeData")).wishList || [],
  cooked: JSON.parse(localStorage.getItem("recipeData")).cooked || [],
  favourite: JSON.parse(localStorage.getItem("recipeData")).favourite || [],
};

// create provider
export const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);

  useEffect(() => {
    localStorage.setItem("recipeData", JSON.stringify(state));
  }, [state]);

  return (
    <RecipeContext.Provider
      value={{
        wishList: state.wishList,
        cooked: state.cooked,
        favourite: state.favourite,
        dispatch,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
