import React, { useState } from "react";

import styled from "styled-components";

import {
  StyledForm,
  StyledInput,
  StyledHeader,
  StyledLink,
} from "./styles/Header.styles";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";

import { NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
    setInput("");
  };

  return (
    <StyledHeader>
      <div>
        <GiForkKnifeSpoon className="icon" />
        <StyledLink to={"/"}>Foodie</StyledLink>
      </div>

      <StyledForm onSubmit={submitHandler}>
        <BiSearch style={{ color: "white" }} />
        <StyledInput
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </StyledForm>
      <ul>
        <li>
          <StyledNavLink to={"/wishList"}>WishList</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={"/cooked"}>Cooked</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={"/favourite"}>Favourite</StyledNavLink>
        </li>
      </ul>
    </StyledHeader>
  );
};

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--back-ground-color);
  font-weight: bold;
  padding-bottom: 2px;

  &.active {
    border-bottom: 2px solid orangered;
  }
`;
