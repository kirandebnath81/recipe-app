import React, { useEffect, useState } from "react";

import axios from "axios";
import { Container, Card, Gradient } from "./styles/Home.styles";

import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import { Link } from "react-router-dom";

export const Desserts = () => {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    getDesserts();
  }, []);

  const getDesserts = async () => {
    const storage = JSON.parse(localStorage.getItem("desserts"));

    if (storage) {
      setDesserts(storage);
    } else {
      try {
        const { data } = await axios.get(
          ` https://api.spoonacular.com/recipes/random`,
          {
            params: {
              apiKey: process.env.REACT_APP_API_KEY,
              number: 10,
              tags: "desserts",
            },
          }
        );
        setDesserts(data.recipes);
        localStorage.setItem("desserts", JSON.stringify(data.recipes));
      } catch (error) {
        console.log("error occured", error);
      }
    }
  };

  return (
    <Container>
      <h3>Popular Desserts</h3>
      <Splide
        options={{
          autoWidth: true,
          drag: "free",
          arrows: false,
          gap: "2rem",
          pagination: false,
        }}
      >
        {desserts.map((dessert) => (
          <SplideSlide key={dessert.id}>
            <Link to={`recipe/${dessert.id}`}>
              <Card>
                <img src={dessert.image} alt="" />
                <Gradient />
                <div>{dessert.title}</div>
              </Card>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </Container>
  );
};
