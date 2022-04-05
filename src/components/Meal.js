import React, { useEffect, useState } from "react";

import axios from "axios";
import styled from "styled-components";
import { Container, Card, Gradient, Button } from "./styles/Home.styles";

import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import { Link } from "react-router-dom";

export const Meal = () => {
  const [meals, setMeals] = useState([]);
  const [tag, setTag] = useState("");

  useEffect(() => {
    getMeal(tag);
  }, [tag]);

  const getMeal = async (tag) => {
    try {
      const { data } = await axios.get(
        ` https://api.spoonacular.com/recipes/random`,
        {
          params: {
            apiKey: process.env.REACT_APP_API_KEY,
            number: 10,
            tags: tag,
          },
        }
      );
      setMeals(data.recipes);
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
      <ContainerFluid>
        <h3>Popular Meals</h3>
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
      </ContainerFluid>

      <Splide
        options={{
          autoWidth: true,
          drag: "free",
          arrows: false,
          gap: "2rem",
          pagination: false,
        }}
      >
        {meals.map((meal) => (
          <SplideSlide key={meal.id}>
            <Link to={`/recipe/${meal.id}`}>
              <Card>
                <img src={meal.image} alt="" />
                <Gradient />
                <div>{meal.title}</div>
              </Card>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </Container>
  );
};

const ContainerFluid = styled.div`
  display: flex;
  align-items: center;
  margin: 14px 0px;
  div {
    height: 22px;
    margin-left: 185px;
  }
  @media (max-width: 420px) {
    flex-direction: column;
    margin: 0px 0px 20px;
    div {
      margin-left: 0px;
    }
  }
`;
