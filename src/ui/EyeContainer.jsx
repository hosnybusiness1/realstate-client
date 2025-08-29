import styled from "styled-components";

const EyeContainer = styled.span`
  position: absolute;
  display: inline-block;
  top: 1rem;
  right: 3rem;

  @media only screen and (max-width: 395px) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 390px) {
    font-size: 1.1rem;
  }
`;

export default EyeContainer