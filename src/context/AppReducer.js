import { ACTIONS } from "./Actions";

export const AppReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_RECIPE:
      return {
        ...state,
        wishList: [...state.wishList, action.payload.recipeData],
      };

    case ACTIONS.DELETE_RECIPE:
      return {
        ...state,
        wishList: state.wishList.filter(
          (recipe) => recipe.id !== action.payload.recipeId
        ),
        cooked: state.cooked.filter(
          (recipe) => recipe.id !== action.payload.recipeId
        ),
        favourite: state.favourite.filter(
          (recipe) => recipe.id !== action.payload.recipeId
        ),
      };

    case ACTIONS.ADD_COOKED:
      return {
        ...state,
        cooked: [...state.cooked, action.payload.cooked],
        wishList: state.wishList.filter(
          (recipe) => recipe.id !== action.payload.cookedRecipeId
        ),
      };

    case ACTIONS.ADD_FAV:
      return {
        ...state,
        cooked: state.cooked.filter(
          (recipe) => recipe.id !== action.payload.favRecipeId
        ),
        favourite: [...state.favourite, action.payload.favRecipe],
      };

    default:
      return state;
  }
};
