import styled from "styled-components";

export const Container = styled.div`
  color: ${({ mode }) => (mode ? "white" : "black")};
  width: 80vw;
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  width: 400px;
  h3 {
    width: 100%;
    font-weight: 900;
    letter-spacing: 1px;
    margin-top: 0px;
    margin-bottom: 15px;
  }
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 370px;
  }
`;

export const Description = styled.div`
  width: 500px;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
  }

  .btns {
    margin-bottom: 20px;
  }

  .summaryBtn {
    background-color: var(--back-ground-color);
    color: white;
    &:hover {
      background-color: #000080;
    }
  }

  .instructions,
  .summary {
    font-weight: 400;
    line-height: 1.63rem;
    letter-spacing: 1px;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
  }
  .instructions {
    margin-bottom: 20px;
  }
  .summary {
    margin-top: 20px;
  }

  li {
    margin-bottom: 20px;
    font-family: "Poppins", sans-serif;
  }

  @media (max-width: 420px) {
    width: 350px;
    margin-left: 20px;
    margin-top: 20px;
    /* border: 1px solid #000; */
    .btns {
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
    }
  }
`;

export const AddButton = styled.button`
  width: 200px;
  height: 25px;
  /* margin: 0px auto; */
  margin-bottom: 15px;
  background-color: var(--back-ground-color);
  color: white;
  border: 1px solid #000;
  border-radius: 5px;
  font-weight: 600;

  &:hover {
    background-color: #000080;
    width: 210px;
    height: 30px;
  }

  @media (max-width: 420px) {
  }
`;
