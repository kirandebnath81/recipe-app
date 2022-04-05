import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import styled from "styled-components";
import { Container, Card, Gradient } from "../components/styles/Cuisine.styles";
import { Link, useParams } from "react-router-dom";

import { ThemeContext } from "../DarkMode/Context";

export const Searched = () => {
  const [cuisines, setCuisines] = useState([]);

  const { SearchedCuisine } = useParams();

  const themeMode = useContext(ThemeContext)[0];

  useEffect(() => {
    getCuisines(SearchedCuisine);
  }, [SearchedCuisine]);

  const getCuisines = async (cuisine) => {
    try {
      const { data } = await axios.get(
        ` https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            apiKey: process.env.REACT_APP_API_KEY,
            number: 12,
            query: cuisine,
          },
        }
      );

      setCuisines(data.results);
    } catch (error) {
      console.log("error occured", error);
    }
  };

  return (
    <Container>
      <div className="header">
        <Title>{SearchedCuisine}</Title>
      </div>
      <div className="cuisine">
        {cuisines.map((cuisine) => (
          <div key={cuisine.id}>
            <Link to={`/recipe/${cuisine.id}`}>
              <Card mode={themeMode}>
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

const Title = styled.h2`
  font-weight: bold;
  font-size: 1.8rem;
  letter-spacing: 4px;
`;
