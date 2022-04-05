import React, { useEffect, useState } from "react";

import axios from "axios";

import { Button } from "../components/styles/Home.styles";
import { Container, Card, Gradient } from "../components/styles/Cuisine.styles";

import { Link, useParams } from "react-router-dom";

export const Cuisine = () => {
  const [cuisines, setCuisines] = useState([]);
  const [tag, setTag] = useState("");

  const { name } = useParams();

  useEffect(() => {
    getCuisines(name, tag);
  }, [name, tag]);

  const getCuisines = async (category, tag) => {
    try {
      const { data } = await axios.get(
        ` https://api.spoonacular.com/recipes/random`,
        {
          params: {
            apiKey: process.env.REACT_APP_API_KEY,
            number: 12,
            tags: `${category},${tag}`,
          },
        }
      );

      setCuisines(data.recipes);
    } catch (error) {
      console.log("error occured", error);
    }
  };

  const styles = {
    allMeal: {
      backgroundColor: tag === "" ? "var(--back-ground-color)" : "white",
      color: tag === "" ? "white" : "black",
    },
    veg: {
      backgroundColor:
        tag === "vegetarian" ? "var(--back-ground-color)" : "white",
      color: tag === "vegetarian" ? "white" : "black",
    },
    vegan: {
      backgroundColor: tag === "vegan" ? "var(--back-ground-color)" : "white",
      color: tag === "vegan" ? "white" : "black",
    },
  };

  return (
    <Container>
      <div className="header">
        <h3>Indian Meals</h3>
        <div>
          <Button onClick={() => setTag("")} style={styles.allMeal}>
            All Meals
          </Button>
          <Button onClick={() => setTag("vegetarian")} style={styles.veg}>
            Vegetarian
          </Button>
          <Button onClick={() => setTag("vegan")} style={styles.vegan}>
            Vegan
          </Button>
        </div>
      </div>
      <div className="cuisine">
        {cuisines.map((cuisine) => (
          <div key={cuisine.id}>
            <Link to={`/recipe/${cuisine.id}`}>
              <Card key={cuisine.id}>
                <img src={cuisine.image} alt="" />
                <Gradient />
                <div>{cuisine.title}</div>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};
