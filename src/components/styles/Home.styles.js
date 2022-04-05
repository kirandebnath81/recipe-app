import styled from "styled-components";

export const Container = styled.div`
  /* border: 1px solid #000; */
  width: 84vw;
  @media (max-width: 420px) {
    /* border: 1px solid #000; */
    width: auto;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Card = styled.div`
  width: 330px;
  height: 200px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    position: absolute;
    left: 0%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  div {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    position: absolute;
    z-index: 10;
    color: white;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 15px 5px;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 1px;
  }

  @media (max-width: 420px) {
    text-align: center;
    width: 345px;
    height: 220px;
  }
`;

export const Gradient = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 65%,
    rgba(0, 0, 0, 1)
  );
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 20px;
`;

export const Button = styled.button`
  margin-bottom: 15px;
  margin: 0px 10px;
  width: 95px;
  height: 20px;
  font-size: 12px;
  font-weight: 900;
  border-radius: 4px;
  border: 1px solid #000;
  background-color: white;
  @media (max-width: 420px) {
    width: 75px;
    margin-right: 15px;
  }
`;
