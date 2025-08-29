import styled, { css } from "styled-components";

const FormContainer = styled.div`
  ${(props) =>
    props.type === "login" &&
    css`
      margin: 5% auto;
    `}

  ${(props) =>
    props.type === "signup" &&
    css`
      margin: 1rem auto;
    `}

  display: flex;
  flex-direction: column;
  width: 40%;

  @media only screen and (max-width: 1044px) {
    width: 45%;
  }

  @media only screen and (max-width: 970px) {
    width: 50%;
  }

  @media only screen and (max-width: 890px) {
  width: 55%;
  }

   @media only screen and (max-width: 760px) {
    width: 60%;
  }

   @media only screen and (max-width: 670px) {
    width: 65%;
  }

   @media only screen and (max-width: 625px) {
    width: 70%;
  }

   @media only screen and (max-width: 625px) {
    width: 80%;
  }

   @media only screen and (max-width: 465px) {
    width: 90%;
  }

  @media only screen and (max-width: 465px) {
    width: 95%;
  }

   
`;

export default FormContainer;
