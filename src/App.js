import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Category } from "./components/Category";
import { Cuisine } from "./pages/Cuisine";
import { Searched } from "./pages/Searched";
import { Recipe } from "./pages/Recipe";
import { Wishlist } from "./pages/Wishlist";
import { Cooked } from "./pages/Cooked";
import { Favourite } from "./pages/Favourite";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecipeProvider } from "./context/Context";

function App() {
  return (
    <RecipeProvider>
      <Router>
        <Header />
        <div className="App">
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
        </div>
      </Router>
    </RecipeProvider>
  );
}

export default App;
