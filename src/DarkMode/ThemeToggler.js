import React, { useContext } from "react";

import { ThemeContext } from "./Context";

import styled from "styled-components";

export const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  const clickHandler = () => {
    setThemeMode((prevState) => !prevState);
  };

  return (
    <Toggler onClick={clickHandler} mode={themeMode}>
      <TogglerDark mode={themeMode} />
      <TogglerCircle />
      <TogglerCircleDark />
    </Toggler>
  );
};

const Toggler = styled.div`
  position: absolute;
  left: 55px;
  top: 74px;
  width: 49px;
  height: 22px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${({ mode }) =>
    mode ? "white 2px 1px 4px 1px" : "black 2px 1px 4px 1px"};

  @media (max-width: 420px) {
    left: 25px;
    top: 30px;
  }
`;

const TogglerDark = styled.div`
  justify-content: flex-end;
  background-color: white;
  box-shadow: ${({ mode }) =>
    mode ? "white 2px 1px 4px 1px" : "white -2px 1px 4px 2px"};
`;

const TogglerCircle = styled.div`
  background-color: #000;
  width: 21px;
  height: 21px;
  border-radius: 50%;
`;

const TogglerCircleDark = styled.div`
  background-color: #000;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background-color: white;
`;
