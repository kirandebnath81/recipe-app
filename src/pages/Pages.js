import { Header } from "../components/Header";
import { Home } from "./Home";

import { Category } from "../components/Category";
import { Cuisine } from "./Cuisine";
import { Searched } from "./Searched";
import { Recipe } from "./Recipe";
import { Wishlist } from "./Wishlist";
import { Cooked } from "./Cooked";
import { Favourite } from "./Favourite";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeToggler } from "../DarkMode/ThemeToggler";
import { ThemeContext } from "../DarkMode/Context";
import { useContext } from "react";

import styled from "styled-components";

function Pages() {
  const themeMode = useContext(ThemeContext)[0];

  return (
    <Main mode={themeMode}>
      <Router>
        <ThemeToggler />
        <Header />
        <Container>
          <Category />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:name" element={<Cuisine />} />
            <Route path="/searched/:SearchedCuisine" element={<Searched />} />
            <Route path="/recipe/:recipeId" element={<Recipe />} />
            <Route path="/wishList" element={<Wishlist />} />
            <Route path="/cooked" element={<Cooked />} />
            <Route path="/favourite" element={<Favourite />} />
          </Routes>
        </Container>
      </Router>
    </Main>
  );
}

export default Pages;

const Container = styled.div`
  display: flex;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

const Main = styled.main`
  height: 100%;
  padding: 10px 50px;
  background-color: ${({ mode }) => (mode ? "black" : "white")};

  @media (max-width: 420px) {
    height: 100%;
    padding: 10px 20px;
  } ;
`;
