import React, { useEffect, useState } from "react";

import axios from "axios";
import styled from "styled-components";
import { Container, Card, Gradient } from "../components/styles/Cuisine.styles";
import { Link, useParams } from "react-router-dom";

export const Searched = () => {
  const [cuisines, setCuisines] = useState([]);

  const { SearchedCuisine } = useParams();

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
          <Link to={`/recipe/${cuisine.id}`}>
            <Card key={cuisine.id}>
              <img src={cuisine.image} alt="" />
              <Gradient />
              <div>{cuisine.title}</div>
            </Card>
          </Link>
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
