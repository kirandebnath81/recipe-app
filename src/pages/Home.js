import React from "react";

import { Desserts } from "../components/Desserts";
import { Meal } from "../components/Meal";

import styled from "styled-components";

export const Home = () => {
  return (
    <Wrapper>
      <Meal />
      <Desserts />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;
