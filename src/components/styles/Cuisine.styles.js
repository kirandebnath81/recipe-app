import styled from "styled-components";

export const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    align-items: center;
    margin: 25px 0px 5px;
    div {
      height: 22px;
      margin-left: 220px;
    }
  }

  .cuisine {
    margin-top: 10px;
    height: 75vh;
    width: 84vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
  }

  @media (max-width: 420px) {
    .header {
      margin: 0px 0px 10px;
      flex-direction: column;
      align-items: space-between;
      div {
        display: flex;
        height: 22px;
        margin-left: 0px;
      }
    }
    .cuisine {
      height: auto;
      width: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-content: center;
    }
  }
`;

export const Card = styled.div`
  width: 20vw;
  height: 23vh;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    position: absolute;
    left: 0%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 10px;
  }

  div {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    position: absolute;
    color: white;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 10px 5px;
    font-size: 13px;
    text-align: center;
  }

  @media (max-width: 420px) {
    width: 160px;
    height: 160px;
    margin-bottom: 25px;

    div {
      font-size: 9px;
      text-align: center;
    }
  }
`;

export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 1)
  );
`;
