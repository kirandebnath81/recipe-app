import React from "react";
import "./App.css";
import Pages from "./pages/Pages";
import { RecipeProvider } from "./context/Context";
import { ThemeProvider } from "./DarkMode/Context";

export default function App() {
  return (
    <ThemeProvider>
      <RecipeProvider>
        <Pages />
      </RecipeProvider>
    </ThemeProvider>
  );
}
