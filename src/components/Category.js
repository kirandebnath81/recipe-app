import React from "react";

import styled from "styled-components";
import { NavLink } from "react-router-dom";

//icons
import { GiNoodles, GiFrenchFries } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { MdEmojiFoodBeverage } from "react-icons/md";

export const Category = () => {
  return (
    <Container>
      <StyledLink to={"/category/indian"}>
        <MdEmojiFoodBeverage className="icon" />
        Indian
      </StyledLink>
      <StyledLink to={"/category/american"}>
        <FaHamburger className="icon" />
        American
      </StyledLink>
      <StyledLink to={"/category/italian"}>
        <FaPizzaSlice className="icon" />
        Italian
      </StyledLink>
      <StyledLink to={"category/chinese"}>
        <GiNoodles className="icon" />
        Chinese
      </StyledLink>
      <StyledLink to={"/category/french"}>
        <GiFrenchFries className="icon" />
        French
      </StyledLink>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 90px;
  height: 400px;
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 420px) {
    flex-direction: row;
    margin-top: 40px;
    margin-bottom: 10px;
    height: auto;
    width: auto;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--back-ground-color);
  color: white;

  &.active {
    background-image: linear-gradient(
      180deg,
      rgba(255, 91, 3) 50%,
      rgba(255, 74, 54)
    );
  }

  .icon {
    font-size: 1rem;
  }
`;
