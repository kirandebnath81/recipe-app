import styled from "styled-components";

import { NavLink, Link } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 83.7vw;
  margin-left: 104px;
  color: ${({ mode }) => (mode ? "white" : "")};

  div {
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      font-size: 2rem;
    }
  }

  ul {
    display: flex;
  }

  li {
    list-style: none;
    margin-right: 30px;
  }

  @media (max-width: 420px) {
    flex-direction: column;
    height: 150px;
    width: 90vw;
    margin-left: 0px;

    li {
      list-style: none;
      margin: 0px 20px;
    }
  } ;
`;

export const StyledForm = styled.form`
  box-shadow: 0px 1px 3px 1px rgb(221, 219, 219);
  padding: 0px 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-left: 125px;
  background-color: var(--back-ground-color);

  &:hover {
    box-shadow: 1px 4px 10px 2px rgb(221, 219, 219);
    border: none;
  }

  @media (max-width: 420px) {
    margin-left: 0px;
  } ;
`;

export const StyledInput = styled.input`
  width: 300px;
  height: 35px;
  outline: none;
  border: none;
  text-indent: 10px;
  font-size: 14px;
  font-weight: 800;
  background-color: var(--back-ground-color);
  color: white;

  @media (max-width: 420px) {
    width: auto;
  } ;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 2.2rem;
  font-weight: 900;
  font-family: "Playfair Display", serif;

  color: ${({ mode }) => (mode ? "white" : "var(--back-ground-color)")};
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--back-ground-color);
  font-weight: 500;
  padding-bottom: 2px;
  color: ${({ mode }) => (mode ? "white" : "")};
  font-family: "Poppins", sans-serif;

  &.active {
    border-bottom: 2px solid orangered;
  }
`;
