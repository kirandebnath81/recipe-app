import React, { useState, useContext } from "react";

import {
  StyledForm,
  StyledInput,
  StyledHeader,
  StyledLink,
  StyledNavLink,
} from "./styles/Header.styles";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";

import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../DarkMode/Context";

export const Header = () => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const themeMode = useContext(ThemeContext)[0];

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
    setInput("");
  };

  return (
    <StyledHeader mode={themeMode}>
      <div>
        <GiForkKnifeSpoon className="icon" />
        <StyledLink to={"/"} mode={themeMode}>
          Foodie
        </StyledLink>
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
          <StyledNavLink to={"/wishList"} mode={themeMode}>
            WishList
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={"/cooked"} mode={themeMode}>
            Cooked
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={"/favourite"} mode={themeMode}>
            Favourite
          </StyledNavLink>
        </li>
      </ul>
    </StyledHeader>
  );
};
