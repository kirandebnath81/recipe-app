import { createContext, useEffect, useReducer } from "react";

import { AppReducer } from "./AppReducer";

//create context
export const RecipeContext = createContext();

//create initailState
const initalState = {
  wishList: JSON.parse(localStorage.getItem("wishListData")) || [],
  cooked: JSON.parse(localStorage.getItem("cookedData")) || [],
  favourite: JSON.parse(localStorage.getItem("favouriteData")) || [],
};

// create provider
export const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);

  useEffect(() => {
    localStorage.setItem("wishListData", JSON.stringify(state.wishList));
    localStorage.setItem("cookedData", JSON.stringify(state.cooked));
    localStorage.setItem("favouriteData", JSON.stringify(state.favourite));
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
