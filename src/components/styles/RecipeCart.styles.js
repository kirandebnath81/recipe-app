import styled from "styled-components";

export const Container = styled.div`
/* border: 10px solid red; */

  width: 100%;
  height: 100%;
  margin-bottom: 635px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
`;

export const Card = styled.div`
  width: 330px;
  height: 210px;
  position: relative;
  margin-top: 50px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    position: absolute;
    box-shadow: ${({ mode }) =>
      mode ? "grey 0px 1px 1px  " : "rgba(0, 0, 0, 0.35) 0px 5px 15px"};
  }

  .title {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    position: absolute;
    z-index: 10;
    color: white;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 12px 4px;
    text-align: center;
    font-size: 14px;
  }

  .btn {
    display: flex;
    /* border: 1px solid #000; */
    /* justify-content: space-between; */
    justify-content: center;
    height: 20px;
    position: relative;
    top: 220px;
  }

  @media (max-width: 420px) {
    width: 370px;
    height: 210px;
    position: relative;
    margin-top: 40px;
    margin-bottom: 50px;
    .btn {
      display: flex;
      justify-content: center;
      height: 20px;
      position: relative;
      margin-bottom: 30px;
    }
  }
`;

export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: absolute;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 60%,
    rgba(0, 0, 0, 0.9)
  );
`;
